/*  DOM NAVIGATION
    Task 1. 
<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

For each of the following, give at least one way of how to access them:

*The <div> DOM node? */
    document.body.firstElementChild
    document.body.childNodes[1]

//*The <ul> DOM node?
    document.body.lastElementChild

//*The second <li> (with Pete)?
    document.body.lastElementChild.lastElementChild

/*
    Task 2.
    If elem – is an arbitrary DOM element node…

    Is it true that elem.lastChild.nextSibling is always null?   ---->  Yes, because elem.lastChild has no next sibling
    Is it true that elem.children[0].previousSibling is always null ?  ----> False, because even though elem.children[0] is the first child, there could be other nodes in hierarchy

*/
/*
    Task 3. https://plnkr.co/edit/nuNlB97squ4Hgwrg?p=preview&preview
    Write the code to paint all diagonal table cells in red.
    You’ll need to get all diagonal <td> from the <table> and paint them using the code: td.style.backgroundColor = 'red';
*/
//----------------------------------------------------------------------------------------------------------------------------------------------------  

//SEARCHING ELEMENTS DOM
//    Here’s the document with the table and form (https://javascript.info/task/find-elements/table.html). How to find?…

//*The table with id="age-table"
document.querySelector('#age-table')
document.getElementById('age-table')

//*All label elements inside that table (there should be 3 of them)
document.getElementsByTagName('label')

//*The first td in that table (with the word “Age”)
document.getElementsByTagName('td')[0]

//*The form with name="search"
document.querySelector("form[name='search']")

//*The first input in that form
document.getElementsByTagName('input')[0]

//*The last input in that form
document.getElementsByTagName('input')[1]

//----------------------------------------------------------------------------------------------------------------------------------------------------

//BASIC DOM NODE PROPERTIES
//  Task 1 (https://plnkr.co/edit/KQWTwzSfogX1OLJV?p=preview&preview)
//There’s a tree structured as nested ul/li. Write the code that for each <li> shows:
//What’s the text inside it (without the subtree) and the number of nested <li> – all descendants, including the deeply nested ones.

for (let li of document.getElementsByTagName('li')) {
    let elemLi = li.firstChild.data;
    let number = li.getElementsByTagName('li').length;
    console.log(elemLi + number);
}


//  Task 2
/*
What does the script show?

<html>
<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>
</html>

Answer - 1, which means element node
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------

//ATTRIBUTES AND PROPERTIES
/* Task 1
Write the code to select the element with data-widget-name attribute from the document and to read its value.

    <!DOCTYPE html>
    <html>
    <body>
        <div data-widget-name="menu">Choose the genre</div>

        <script>
            document.querySelector('[data-widget-name]').getAttribute('data-widget-name')

        </script>
    </body>
    </html>
*/

/* Task 2
Make all external links orange by altering their style property.

A link is external if:

Its href has :// in it
But doesn’t start with http://internal.com.
Example:

<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
  // setting style for a single link
  let link = document.querySelector('a');
  link.style.color = 'orange';
</script>
*/

//-------------------------------------------------------------------------------------------------------------------------

//MODIFYING THE DOCUMENT
/* Task 1
Create a function clear(elem) that removes everything from the element.

<ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>

<script>*/
  function clear(elem) {
    while (elem.firstChild){
        elem.firstChild.remove()
    }
  }
  clear(elem); 
  /*
</script>
*/

/* Task 2
Write the code to insert <li>2</li><li>3</li> between two <li> here:
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
*/
one.insertAdjacentHTML('afterend','<li>2</li><li>3</li>')

//----------------------------------------------------------------------------------------------------------------
