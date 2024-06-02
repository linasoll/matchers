import sortHeroesByHealth from "../sort.js"

// eslint-disable-next-line no-undef
test('сортировка героев по уровню здоровья', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
  
const sortedHeroes = sortHeroesByHealth(heroes);
// eslint-disable-next-line no-undef
expect(sortedHeroes).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    ]);
});