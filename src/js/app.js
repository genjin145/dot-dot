import Choices from 'choices.js';

const selects = document.querySelectorAll('select');
const selectOptions = {
  searchEnabled: false,
  itemSelectText: '',
};

selects.forEach(select => new Choices(select, selectOptions));
