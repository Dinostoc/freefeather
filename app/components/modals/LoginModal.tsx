'use client';

import axios from 'axios';
import { signIn } from 'next-auth/react';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        /**axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error('Something went wrong');
            })
            .finally(() => {
                setIsLoading(false);
            })*/

            signIn('credentials', {
                ...data,
                redirect: false,
            })
            .then((callback) => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success('Connexion réussi !');
                    router.refresh();
                    loginModal.onClose();
                }

                if (callback?.error) {
                    toast.error(callback.error);
                }
            })

    }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading 
                title="Bienvenue sur Free Feathers !"
                subtitle="Connectez-vous"
                center={false}
            />
            <Input 
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input 
                id="password"
                type="password"
                label="Mot de passe"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                label="Continuer avec Google"
                icon={FcGoogle}
                onClick={() => {}}
                />
            <Button
                outline
                label="Continuer avec Apple"
                icon={FaApple}
                onClick={() => {}}
                />
            <div className='
                text-neutral-500
                mt-4
                font-light
                '>
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        Première visite ?
                    </div>
                    <div onClick={toggle}
                        className='
                        text-neutral-800
                        cursor-pointer
                        hover:underline
                        '>
                        Créez un compte
                    </div>
                </div>
            </div>
        </div>
    )
    

  return (
    <Modal 
        disable={isLoading}
        isOpen={loginModal.isOpen}
        title="Connexion"
        actionLabel='Continuer'
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
      

  )
};

export default LoginModal;
