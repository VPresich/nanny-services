import { createSelector } from "reselect";
export const selectFavorites = (state) => state.favorites.items;

export const selectIsFavorite = createSelector(
  [selectFavorites, (_, nannyId) => nannyId],
  (favorites, nannyId) => {
    if (!favorites || !nannyId || favorites.length === 0) return false;
    return favorites.some((favorite) => favorite._id === nannyId);
  }
);
