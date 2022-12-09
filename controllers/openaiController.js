const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  apiKey: process.env.DEC_8_2022_OPENAI_API_TOKEN,
})
const openai = new OpenAIApi(configuration)

const generateimage = async (req, res) => {
  const { prompt, size } = req.body
  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    })
    const image_url = response['data'].data[0].url
    res.status(200).json({
      success: true,
      url: image_url,
    })
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
  }
}

module.exports = { generateimage }
