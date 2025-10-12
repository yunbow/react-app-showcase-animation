import useDraggable from './useDraggable';
import PageLayout from '../../components/PageLayout';

const DraggablePage = () => {
  const { ref, isDragging, style } = useDraggable({
    initialPosition: { x: 150, y: 100 },
    bounds: { left: 0, right: 500, top: 0, bottom: 300 },
  });

  return (
    <PageLayout title="Draggable" description="ドラッグ可能要素">
      <div style={{ position: 'relative', width: '600px', height: '400px', border: '2px dashed var(--color-border)', borderRadius: 'var(--radius)' }}>
        <div
          ref={ref}
          style={{
            ...style,
            width: '100px',
            height: '100px',
            backgroundColor: isDragging ? 'var(--color-primary)' : 'var(--color-accent)',
            borderRadius: 'var(--radius)',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'move',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          ドラッグ
        </div>
      </div>
    </PageLayout>
  );
};

export default DraggablePage;
