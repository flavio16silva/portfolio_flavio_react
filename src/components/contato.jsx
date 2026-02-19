import { Social } from "./socialIcon"
import { useState } from 'react'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados enviados:', formData)

    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    })

    alert('Mensagem enviada com sucesso')
  }

  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black'>
      <div className='container mx-auto py-8 px-4'>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 mt-20">
          Contate-me.
        </h2>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className='rounded-lg p-6'>
            <h1 className='block text-left text-xl md:text-2xl font-bold text-white mb-6 mt-2'>
              Vamos trabalhar juntos. <span className='text-[rgb(10,255,169)]'>Envie-me uma mensagem</span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className="space-y-4">
                <div className='mb-4'>
                  <label className='block text-gray-600 font-medium mb-3'>
                    Nome:
                  </label>
                  <input type='text' name='nome' value={formData.nome} onChange={handleChange} className='w-full px-3 py-3 text-[rgb(10,255,169)] bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(10,255,169)] focus:border-[rgb(10,255,169)]'
                    placeholder='Digite seu nome'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-600 font-medium mb-3'>
                    Email:
                  </label>
                  <input type='text' name='email' value={formData.email} onChange={handleChange} className='w-full px-3 py-3  text-[rgb(10,255,169)] bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(10,255,169)] focus:border-[rgb(10,255,169)]'
                    placeholder='Digite seu email'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 font-medium mb-3'>
                    Assunto:
                  </label>
                  <input type='text' name='titulo' value={formData.assunto} onChange={handleChange} className='w-full px-3 py-3 text-[rgb(10,255,169)] bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(10,255,169)] focus:border-[rgb(10,255,169)]'
                    placeholder='Assunto'
                    required
                  />
                </div>
              </div>
              <div className="space-y-4 h-full">
                <div className='flex flex-col h-full'>
                  <label className='block text-gray-700 font-medium mb-2'>
                    Mensagem:
                  </label>
                  <textarea type='text' name='mensagem' value={formData.mensagem} onChange={handleChange} className='w-full h-[calc(100%-48px)] px-4 py-8 bg-gray-900 text-[rgb(10,255,169)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(10,255,169)] focus:border-transparent resize-none'
                    placeholder='Digite sua mensagem aqui...'
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button type='submit' className='bg-[rgb(10,255,169)] text-black text-center text-lg py-3 px-10 rounded-lg font-medium transition-all duration-300 ease-in-out cursor-pointer hover:shadow-[0_0_15px_rgb(10,255,169)] hover:scale-105'>
                Enviar Mensagem
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <Social />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contato }