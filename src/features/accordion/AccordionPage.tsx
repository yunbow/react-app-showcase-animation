import useAccordion from './useAccordion';
import PageLayout from '../../components/PageLayout';

const AccordionPage = () => {
  const accordion1 = useAccordion({ duration: 300 });
  const accordion2 = useAccordion({ duration: 300 });
  const accordion3 = useAccordion({ duration: 300 });

  const accordions = [
    { hook: accordion1, title: 'アコーディオン 1', content: 'ここに最初のアコーディオンの内容が入ります。高さに応じて自動的にアニメーションします。' },
    { hook: accordion2, title: 'アコーディオン 2', content: 'ここに2番目のアコーディオンの内容が入ります。複数のアコーディオンを独立して動作させることができます。' },
    { hook: accordion3, title: 'アコーディオン 3', content: 'ここに3番目のアコーディオンの内容が入ります。スムーズな開閉アニメーションを実装しています。' },
  ];

  return (
    <PageLayout title="Accordion" description="アコーディオンメニュー">
      <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {accordions.map((accordion, index) => (
          <div key={index} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <button
              onClick={accordion.hook.toggle}
              style={{
                width: '100%',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--color-muted)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--color-foreground)',
              }}
            >
              <span>{accordion.title}</span>
              <span style={accordion.hook.iconStyle}>▼</span>
            </button>

            <div style={accordion.hook.containerStyle}>
              <div ref={accordion.hook.contentRef} style={{ padding: '20px', backgroundColor: 'var(--color-card)' }}>
                <p style={{ margin: 0 }}>{accordion.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default AccordionPage;
