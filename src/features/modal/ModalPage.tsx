import { useState } from 'react';
import useModal from './useModal';
import PageLayout from '../../components/PageLayout';

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible, backdropStyle, modalStyle, handleBackdropClick } = useModal({
    isOpen,
    duration: 250,
    onClose: () => setIsOpen(false),
  });

  return (
    <PageLayout title="Modal" description="モーダルダイアログ">
      <button onClick={() => setIsOpen(true)} className="demo-button">
        モーダルを開く
      </button>

      {isVisible && (
        <div
          onClick={handleBackdropClick}
          style={{
            ...backdropStyle,
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div style={{
            ...modalStyle,
            backgroundColor: 'var(--color-card)',
            padding: '40px',
            borderRadius: 'var(--radius)',
            maxWidth: '500px',
            width: '90%',
            boxShadow: 'var(--shadow-2xl)',
          }}>
            <h2>モーダルタイトル</h2>
            <p>モーダルコンテンツがここに入ります。背景をクリックすると閉じます。</p>
            <button onClick={() => setIsOpen(false)} className="demo-button" style={{ marginTop: '20px' }}>
              閉じる
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ModalPage;
