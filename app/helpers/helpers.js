export const reactLog = (title, message) => {
  console.log(`%c` + title + '%c ' + message, 'background: blue; color: white;', null);
};

export const prettyLog = (title, message) => {
  console.log(`%c` + title + '%c ' + message, 'background: yellow; color: black;', null);
};

export const errorLog = (title, message) => {
  console.log(`%c` + title + '%c ' + message, 'background: red; color: white;', null);
};