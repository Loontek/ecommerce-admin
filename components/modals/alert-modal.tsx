'use client';

import { useEffect, useState } from 'react';

import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
    isOpen,
    loading,
    onClose,
    onConfirm,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Modal
            title="Вы уверены?"
            description="Это действие не может быть отменено"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                    disabled={loading}
                    variant="outline"
                    type="button"
                    onClick={onClose}
                >
                    Отмена
                </Button>
                <Button
                    disabled={loading}
                    variant="destructive"
                    type="button"
                    onClick={onConfirm}
                >
                    Продолжить
                </Button>
            </div>
        </Modal>
    );
};
