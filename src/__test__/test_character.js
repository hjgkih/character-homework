import Character from "../js/character";
import Bowman from './bowman';

test('number of characters of name', () => {
    const bowman = new Bowman('e', 'Bowman');
  expect(bowman).toThrow('Имя должно содержать не менее двух и не более десяти символов!');
});