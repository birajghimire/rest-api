const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "hello"})
})

const setGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: "hello"})
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: "hello"})
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: "hello"})
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}