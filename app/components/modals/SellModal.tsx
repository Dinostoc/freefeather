'use client'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMemo, useState } from "react";

import useSellModal from "@/app/hooks/useSellModal";

import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import Input from "../inputs/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ImageUpload from "../inputs/ImageUpload";
import getCurrentUser from "@/app/actions/getCurrentUser";

enum STEPS {
    CATEGORY = 0,
    INFO = 1,
    DESCRIPTION = 2,
    IMAGES = 3,
    PRICE = 4
}

const SellModal = () => {
    const router = useRouter();
    const sellModal = useSellModal();

        const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',            
            imageSrc: '',
            price: 1,
            title:'',
            description: '',
            author:''
        }
    });

    const category = watch('category');
    const imageSrc = watch('imageSrc');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const onBack = () => {
        setStep((value) => value - 1);
    }
    const onNext = () => {
        setStep((value) => value + 1);
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step != STEPS.PRICE) {
            return onNext();
        }

        setIsLoading(true);

        axios.post('/api/listings', data)
        .then(() => {
            toast.success('Vente créée !');
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            sellModal.onClose();
        })
        .catch(() => {
            toast.error('Erreur lors de la mise en vente');
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const actionLabel = useMemo(() => {
        if (step == STEPS.PRICE) {
            return 'Créer';
        }

        return 'Suivant';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step == STEPS.CATEGORY) {
            return undefined;
        }

        return 'Retour';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
                title="Quel genre décrit le mieux votre livre ?"
                subtitle="Choisissez une catégorie"
            />
            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-3
                max-h-[50vh]
                overflow-y-auto
                ">
                    {categories.map((item) => (
                        <div key={item.label} className="col-span-1">
                            <CategoryInput
                                onClick={(category) => setCustomValue('category', category)}
                                selected={category == item.label}
                                label={item.label}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )


    if (step == STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Quel est le titre de votre livre ?"
                    subtitle="Aidez les lecteurs à vous retrouver !"
                />
                <div className="flex flex-col gap-6">
                <Input
                    id="title"
                    label="Titre"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                {/*<textarea id="description" name="postContent" rows={4} cols={40}/>*/}
                <Input
                    id="author"
                    label="Nom d'auteur"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                </div>                
            </div>
        )
    }


    if (step == STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Description"
                    subtitle="Décrivez votre livre en quelques phrases"
                />
                <div className="flex flex-col gap-6">
                {/*<textarea id="description" name="postContent" rows={4} cols={40}/>*/}
                <Input
                    id="description"
                    label="Description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
                </div>                
            </div>
        )
    }


    if (step == STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Ajoutez une image à votre livre"
                    subtitle="Donnez un aperçu !"
                />
                <ImageUpload value={imageSrc}
                    onChange={(value) => setCustomValue('imageSrc', value)}                
                />               
            </div>
        )
    }


    if (step == STEPS.PRICE) {
        bodyContent = ( 
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Fixez votre prix !"
                    subtitle="A quel prix souhaitez-vous le vendre ?"
                />
                <Input
                    id="price"
                    label="Prix"
                    formatPrice
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>

        )
    }

    return (
        <Modal 
            isOpen={sellModal.isOpen}
            onClose={sellModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step == STEPS.CATEGORY ? undefined : onBack}
            title="Vendez vos livres !"
            body={bodyContent}
        />    

    )
};

export default SellModal;

