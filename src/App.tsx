/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ReservationModal } from './components/ReservationModal';
import { ProfileModal } from './components/ProfileModal';
import { ArticleModal } from './components/ArticleModal';
import { ServicosScreen } from './components/screens/ServicosScreen';
import { EspacoB5Screen } from './components/screens/EspacoB5Screen';
import { EventosScreen } from './components/screens/EventosScreen';
import { ContatoScreen } from './components/screens/ContatoScreen';
import { BlogPost, TabType } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('servicos');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationType, setReservationType] = useState<string>('locacao');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleOpenReservation = (type: string = 'locacao') => {
    setReservationType(type);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111317] text-[#e2e2e6] flex flex-col font-body selection:bg-[#EB4E2C] selection:text-white">
      {/* Fixed Header */}
      <Header
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenReservation={() => handleOpenReservation('locacao')}
      />

      {/* Main Content View with top padding for fixed header and bottom padding for bottom nav */}
      <main className="flex-1 pt-16 pb-20 w-full overflow-x-hidden">
        {currentTab === 'servicos' && (
          <ServicosScreen
            onOpenReservation={handleOpenReservation}
            onOpenArticle={(article) => setSelectedArticle(article)}
            onNavigateToTab={(tab) => setCurrentTab(tab)}
          />
        )}

        {currentTab === 'espaco-b5' && (
          <EspacoB5Screen onOpenReservation={handleOpenReservation} />
        )}

        {currentTab === 'eventos' && (
          <EventosScreen onOpenReservation={handleOpenReservation} />
        )}

        {currentTab === 'contato' && <ContatoScreen />}
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Fixed Bottom Navigation */}
      <BottomNav currentTab={currentTab} onTabChange={(tab) => setCurrentTab(tab)} />

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        initialType={reservationType}
        onClose={() => setIsReservationOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenReservation={() => handleOpenReservation('corporativo')}
      />
    </div>
  );
}
