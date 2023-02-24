import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

//@route GET /api/type
//@desc All type options
//@access Public
router.get('/', async (req, res) => {
	try {
		const types = await prisma.type.findMany({
			orderBy: {
				createdAt: 'desc',
			},
			select: {
				id: true,
				label: true,
				value: true,
				valueEg: true,
			},
		})
		return res.status(200).json(types)
	} catch (error) {
		return res.status(404).json({ error })
	}
})

//@route POST api/type
//@desc a type option
//@access Public
router.post('/', async (req, res) => {
	const { value, valueEg } = req.body
	try {
		const type = await prisma.type.create({
			data: {
				value,
				valueEg,
				label: valueEg,
			},
		})
		return res.status(201).json(type)
	} catch (error) {
		return res.status(404).json({ error })
	}
})

//@route PUT api/type
//@desc update a type
//@access Public
router.put('/', async (req, res) => {
	const { value, valueEg, id } = req.body
	try {
		const type = await prisma.type.update({
			where: {
				id,
			},
			data: {
				value,
				valueEg,
				label: valueEg,
			},
		})
		return res.status(201).json(type)
	} catch (error) {
		return res.status(404).json({ error })
	}
})

//@route DELETE api/type
//@desc return success
//@access Public
router.delete('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const type = await prisma.type.delete({
			where: {
				id,
			},
		})
		return res.status(204).json({ success: true })
	} catch (error) {
		return res.status(404).json({ success: false })
	}
})
export default router
