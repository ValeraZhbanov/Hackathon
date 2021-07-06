
const express = require('express'),
    passport = require('passport');

const models = require('./models');
const utility = require('./utility');

const router = express.Router()



router.get('/', async (req, res) => {
    const user = await models.user.find({})
    res.send(JSON.stringify(user))
})

router.get('/api/me', async (req, res) => {
    const user = req.user

    if (!user) {
        return res.sendStatus(422)
    }

    return res.json(user)
})

router.post('/api/register', function (req, res) {
    const data = req.body

    if (!data.email) {
        return res.status(422).json({
            errors: {
                name: 'is required',
                message: 'Email is required',
            },
        })
    }

    const password = utility.gen_password(20)
    const user = new models.user({email: data.email, password: password})

    return user.save((errors, savedUser) => {
        if (errors) return res.status(422).json({errors})

        try {
            utility.send_email({
                email: user.email,
                subject: 'Ваш пароль на сайте: ' + password,
                message: "",
            })

            return res.status(200).json(savedUser)

        } catch (err) {
            return res.status(422).json({errors})
        }
    })
})

router.post('/api/login', async(req, res, next) => {
    const {email, password} = req.body

    if(!email) return res.status(422).json({errors: {email: 'is required', message: 'Email is required', }, })

    if(!password) return res.status(422).json({errors: {password: 'is required', message: 'Password is required', }, })

    return passport.authenticate('local', (err, passportUser) => {
        if (err) return next(err)

        if (passportUser) {
            req.login(passportUser, function (err) {
                if (err) next(err)
                return res.json(passportUser)
            })

        } else {
            return res.status(422).send({errors: {message: 'Invalid password or username', }, })
        }
    })(req, res, next)
})




module.exports = router;