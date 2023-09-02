'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title={'Создать магазин'}
            description={'Создать новый магазин для управления товарами'}
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        ></Modal>
    );
};
