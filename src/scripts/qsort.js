/**
 * Классическая реализация быстрой сортировки
 * @callback callback
 * @param {Array} array Массив для сортировки
 * @param {callback} comp Функция сравнения
 * @return {Array} Отсортированный массив
 */
function qsort(array, comp) {
  // Проверка длины массива
  if (array.length <= 1) {
    return array;
  } else {
    // Выбор опорного элемента
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    // Массивы для хранения элеметов, которые
    // меньше, больше, равны опорному соответственно
    const less = [];
    const greater = [];
    const equal = [];

    // Цикл по длине массива
    for (let i = 0; i < array.length; i++) {
      // Сравниваем элементы с опорным и заполняем соответствующие массивы
      if (comp(array[i], pivot) < 0) {
        less.push(array[i]);
      } else if (comp(array[i], pivot) > 0) {
        greater.push(array[i]);
      } else {
        equal.push(array[i]);
      }
    }
    // Переменная для хранения результата
    const result = [];
    // Рекурсивный вызов функции для элементов меньших и больших опорного
    return result.concat(qsort(less, comp), equal, qsort(greater, comp));
  }
}

export {qsort};
