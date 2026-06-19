/**
 * "Stop it, HTML!"
You don't quite like HTML.

In fact, you like what HTML does but you find annoying to write HTML, if not even expensive! So you decided to explore new ways to write YOUR template language.

After some times you came up with a JS template you think it could be a good start.

element(attributes,content)
Where element returns a string and is so described:

parameter	type	required	contains	example
attributes	object	true - can be empty	key: value	{attributeName1: 'attributeValue1', attributeName2: 'attributeValue2', attributeName3: 'attributeValue3', ...}
content	array	false - can be undefined	string	['hello', br({}), 'world!']
Now that you have a paradigm you tried to write a basic page:

html({},[
  head({},[
    title({},['Hello, world!']),
    script({
      type:'text/javascript',
      src:'js/index.js'
    }),
    link({
      rel:'stylesheet',
      href:'css/style.css'
    })
  ]),
  body({},[
    div({
      class:'this-is-a-class',
      id:'this-makes-me-unique'
    },['Hello, world!'])
  ])
])
You find this template pretty functional and you're excited! But wait...those functions doesn't exists!!

You need to support the following tags: ['html','head','title','body','script','link','div','span','img','br','hr']

In HTML, some tags - link, img, br, hr - can be either self-closed or left open, so e.g. <br> or <br /> are both valid. However, tests in this Kata require the <br /> version.

You need to write the corresponding functions (or find a way to make these names available at global scope) that print out plain HTML to be sent over the Internet!

loadMyTemplateLanguage() is a setup function that will be called before any assertions, you may use it to your advantage.

Hint: you can write each function individually, but you do not have to. There are ways to declare several variables at once, or to attach them to the global scope.
 */

function loadMyTemplateLanguage() {
  const tags = [
    'html',
    'head',
    'title',
    'body',
    'script',
    'link',
    'div',
    'span',
    'img',
    'br',
    'hr',
  ];

  const selfClosing = new Set(['link', 'img', 'br', 'hr']);

  tags.forEach((tag) => {
    global[tag] = function (attributes = {}, content = []) {
      const attrs = Object.entries(attributes)
        .map(([key, value]) => ` ${key}="${value}"`)
        .join('');

      if (selfClosing.has(tag)) {
        return `<${tag}${attrs} />`;
      }

      const inner = Array.isArray(content) ? content.join('') : '';

      return `<${tag}${attrs}>${inner}</${tag}>`;
    };
  });
}