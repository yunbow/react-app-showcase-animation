import { useState } from 'react';
import useSlideMenu from './useSlideMenu';
import PageLayout from '../../components/PageLayout';

const SlideMenuPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible, menuStyle, overlayStyle, handleOverlayClick } = useSlideMenu({
    isOpen,
    direction: 'right',
    onClose: () => setIsOpen(false),
  });

  return (
    <PageLayout title="Slide Menu" description="スライドメニュー">
      <button onClick={() => setIsOpen(true)} className="demo-button">
        メニューを開く
      </button>

      {isVisible && (
        <>
          <div
            onClick={handleOverlayClick}
            style={{
              ...overlayStyle,
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 999,
            }}
          />
          <div style={{
            ...menuStyle,
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            width: '320px',
            backgroundColor: 'var(--color-card)',
            boxShadow: 'var(--shadow-2xl)',
            zIndex: 1000,
            padding: '32px',
          }}>
            <h3 style={{ marginBottom: '24px' }}>メニュー</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>メニュー項目 1</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>メニュー項目 2</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>メニュー項目 3</li>
            </ul>
            <button onClick={() => setIsOpen(false)} className="demo-button" style={{ marginTop: '24px' }}>
              閉じる
            </button>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default SlideMenuPage;
