'use client'

import type React from 'react'
import { useState } from 'react'
import type { Contact } from '../../types/Contact'
import {
  FormOverlay,
  FormContainer,
  FormTitle,
  Form,
  InputGroup,
  Label,
  Input,
  RadioGroup,
  RadioOption,
  ButtonGroup,
  Button
} from './styles'

interface ContactFormProps {
  initialData?: Contact
  onSubmit: (contact: Omit<Contact, 'id'>) => void
  onCancel: () => void
  isEditing?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isEditing = false
}) => {
  const [formData, setFormData] = useState({
    nomeCompleto: initialData?.nomeCompleto || '',
    email: initialData?.email || '',
    telefone: initialData?.telefone || '',
    categoria: initialData?.categoria || ('familia' as const),
    favorito: initialData?.favorito || false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.nomeCompleto && formData.email && formData.telefone) {
      onSubmit(formData)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <FormOverlay>
      <FormContainer>
        <FormTitle>{isEditing ? 'Editar contato' : 'Novo contato'}</FormTitle>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="nomeCompleto">Nome do Contato</Label>
            <Input
              type="text"
              id="nomeCompleto"
              name="nomeCompleto"
              placeholder="Nome do Contato"
              value={formData.nomeCompleto}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email do Contato</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email do Contato"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="telefone">Telefone do Contato</Label>
            <Input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Telefone do Contato"
              value={formData.telefone}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Categoria</Label>
            <RadioGroup>
              <RadioOption>
                <input
                  type="radio"
                  name="categoria"
                  value="familia"
                  checked={formData.categoria === 'familia'}
                  onChange={handleInputChange}
                />
                Família
              </RadioOption>
              <RadioOption>
                <input
                  type="radio"
                  name="categoria"
                  value="amigos"
                  checked={formData.categoria === 'amigos'}
                  onChange={handleInputChange}
                />
                Amigos
              </RadioOption>
              <RadioOption>
                <input
                  type="radio"
                  name="categoria"
                  value="trabalho"
                  checked={formData.categoria === 'trabalho'}
                  onChange={handleInputChange}
                />
                Trabalho
              </RadioOption>
            </RadioGroup>
          </InputGroup>

          <ButtonGroup>
            <Button type="submit" variant="primary">
              {isEditing ? 'Salvar' : 'Cadastrar'}
            </Button>
            <Button type="button" onClick={onCancel}>
              Voltar
            </Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </FormOverlay>
  )
}

export default ContactForm
