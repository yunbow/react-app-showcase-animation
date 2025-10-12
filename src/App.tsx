import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import FadeInPage from './features/fade-in/FadeInPage';
import CountUpPage from './features/count-up/CountUpPage';
import ScrollAnimationPage from './features/scroll-animation/ScrollAnimationPage';
import TypewriterPage from './features/typewriter/TypewriterPage';
import HoverPage from './features/hover/HoverPage';
import DraggablePage from './features/draggable/DraggablePage';
import ShakePage from './features/shake/ShakePage';
import PulsePage from './features/pulse/PulsePage';
import ProgressBarPage from './features/progress-bar/ProgressBarPage';
import ModalPage from './features/modal/ModalPage';
import SlideMenuPage from './features/slide-menu/SlideMenuPage';
import RipplePage from './features/ripple/RipplePage';
import CarouselPage from './features/carousel/CarouselPage';
import AccordionPage from './features/accordion/AccordionPage';
import BouncePage from './features/bounce/BouncePage';
import FlipCardPage from './features/flip-card/FlipCardPage';
import LoadingSpinnerPage from './features/loading-spinner/LoadingSpinnerPage';
import MagneticHoverPage from './features/magnetic-hover/MagneticHoverPage';
import WaveEffectPage from './features/wave-effect/WaveEffectPage';
import InterpolatePage from './features/interpolate/InterpolatePage';
import StaggeredListPage from './features/staggered-list/StaggeredListPage';
import TransformInterpolationPage from './features/transform-interpolation/TransformInterpolationPage';
import FollowCursorPage from './features/follow-cursor/FollowCursorPage';
import TextRevealPage from './features/text-reveal/TextRevealPage';
import MagneticDragPage from './features/magnetic-drag/MagneticDragPage';
import BlurRevealPage from './features/blur-reveal/BlurRevealPage';
import NumberScramblePage from './features/number-scramble/NumberScramblePage';
import TextShufflePage from './features/text-shuffle/TextShufflePage';
import NeonPulsePage from './features/neon-pulse/NeonPulsePage';
import ScrollSnapPage from './features/scroll-snap/ScrollSnapPage';
import RevealOnHoverPage from './features/reveal-on-hover/RevealOnHoverPage';
import LineRevealPage from './features/line-reveal/LineRevealPage';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fade-in" element={<FadeInPage />} />
          <Route path="/count-up" element={<CountUpPage />} />
          <Route path="/scroll-animation" element={<ScrollAnimationPage />} />
          <Route path="/typewriter" element={<TypewriterPage />} />
          <Route path="/hover" element={<HoverPage />} />
          <Route path="/draggable" element={<DraggablePage />} />
          <Route path="/shake" element={<ShakePage />} />
          <Route path="/pulse" element={<PulsePage />} />
          <Route path="/progress-bar" element={<ProgressBarPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/slide-menu" element={<SlideMenuPage />} />
          <Route path="/ripple" element={<RipplePage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/bounce" element={<BouncePage />} />
          <Route path="/flip-card" element={<FlipCardPage />} />
          <Route path="/loading-spinner" element={<LoadingSpinnerPage />} />
          <Route path="/magnetic-hover" element={<MagneticHoverPage />} />
          <Route path="/wave-effect" element={<WaveEffectPage />} />
          <Route path="/interpolate" element={<InterpolatePage />} />
          <Route path="/staggered-list" element={<StaggeredListPage />} />
          <Route path="/transform-interpolation" element={<TransformInterpolationPage />} />
          <Route path="/follow-cursor" element={<FollowCursorPage />} />
          <Route path="/text-reveal" element={<TextRevealPage />} />
          <Route path="/magnetic-drag" element={<MagneticDragPage />} />
          <Route path="/blur-reveal" element={<BlurRevealPage />} />
          <Route path="/number-scramble" element={<NumberScramblePage />} />
          <Route path="/text-shuffle" element={<TextShufflePage />} />
          <Route path="/neon-pulse" element={<NeonPulsePage />} />
          <Route path="/scroll-snap" element={<ScrollSnapPage />} />
          <Route path="/reveal-on-hover" element={<RevealOnHoverPage />} />
          <Route path="/line-reveal" element={<LineRevealPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
