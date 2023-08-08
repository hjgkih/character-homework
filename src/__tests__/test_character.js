import Character from '../js/character';

test('name should be more than 2 characters', () => {
  function character() {
    new Character('S', 'Bowerman');
  }

  expect(character).toThrow(/не менее двух/);
});

test('name should be less than 10 characters', () => {
  function character() {
    new Character('Stasikdurachek', 'Bowerman');
  }

  expect(character).toThrow(/не более десяти/);
});

test('name should be a string', () => {
  function character() {
    new Character(32243, 'Bowerman');
  }

  expect(character).toThrow(/состоять из букв/);
});

test('type of character must be one of used in game', () => {
  function character() {
    new Character('stas', 'Witcher');
  }

  expect(character).toThrow(/Не корректное имя персонажа/);
});
