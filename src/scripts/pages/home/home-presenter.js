import Api from '../../data/api.js';
import FavoriteStoryIdb from '../../utils/favorite-story-idb.js';
import L from 'leaflet';

export default class HomePresenter {
  constructor({ view, storyList, mapContainer }) {
    this._view = view;
    this._storyListEl = storyList;
    this._mapContainerId = mapContainer;
    this._map = null;
    this._stories = [];
  }

  async init() {
    try {
      this._stories = await Api.getStories();

      if (!this._stories || this._stories.length === 0) {
        this._view.showEmptyMessage();
        return;
      }

      this._view.showStories(this._stories);
      this._initMap(this._stories);
    } catch (error) {
      this._view.showError(error.message || 'Gagal memuat cerita.');
    }
  }

  _initMap(stories) {
    // Hapus peta sebelumnya
    if (this._map) {
      this._map.remove();
    }

    // Pastikan elemen map tersedia
    const mapElement = document.getElementById(this._mapContainerId);
    if (!mapElement) {
      console.warn('Elemen map tidak ditemukan');
      return;
    }

    // Inisialisasi ulang map
    this._map = L.map(mapElement).setView([-6.2, 106.8], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this._map);

    // Tambahkan marker
    stories.forEach((story) => {
      if (story.lat && story.lon) {
        L.marker([story.lat, story.lon])
          .addTo(this._map)
          .bindPopup(`
            <strong>${story.name}</strong><br>
            ${story.description}
          `);
      }
    });
  }

  async saveFavorite(story) {
    try {
      await FavoriteStoryIdb.put(story);
      this._view.showFavoriteSavedMessage();
    } catch (error) {
      this._view.showError('Gagal menyimpan cerita favorit: ' + error.message);
    }
  }
}
