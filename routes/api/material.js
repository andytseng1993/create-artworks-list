import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const router = express.Router()

//@route GET api/material
//@desc All material options
//@access Public
router.get('/', async (req, res) => {
	try {
		const materials = await prisma.material.findMany({
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
		return res.status(200).json(materials)
	} catch (error) {
		return res.status(404).json({ error })
	}
})

//@route POST api/material
//@desc a material option
//@access Public
router.post('/', async (req, res) => {
	const { value, valueEg } = req.body
	try {
		const material = await prisma.material.create({
			data: {
				value,
				valueEg,
				label: valueEg,
			},
		})
		return res.status(201).json(material)
	} catch (error) {
		return res.status(404).json({ error })
	}
})

//@route PUT api/material
//@desc update a material
//@access Public
router.put('/', async (req, res) => {
	const { value, valueEg, id } = req.body
	try {
		const material = await prisma.material.update({
			where: {
				id,
			},
			data: {
				value,
				valueEg,
				label: valueEg,
			},
		})
		return res.status(201).json(material)
	} catch (error) {
		return res.status(404).json({ error })
	}
})

//@route DELETE api/material
//@desc return success
//@access Public
router.delete('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const material = await prisma.material.delete({
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
