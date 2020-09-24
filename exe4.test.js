require('@testing-library/jest-dom/extend-expect');




const querySelectorAll =  require('./exe4');
test('return a list of three elements using classes and checked', () => {
    document.body.innerHTML = `
    <section> 
        <div id="1" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="2" class="note"></div>
        <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note"></div>
        <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
     </section>   
    `;
    let data = querySelectorAll("div.note < input.is-complete[checked]");
    data.forEach(element =>{
        expect(element).toHaveClass('note');
        expect(element.children[0]).toBeChecked();
        expect(element.children[0]).toHaveAttribute('type', 'checkbox');
    });
    expect(data.length).toBe(3);
   

});

test('return a list of five elements using classes', () => {
    document.body.innerHTML = `
    <section>
        <div id="1" class="note">1<input type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note">2<input type="checkbox" class="is-complete" ></div>
        <div id="3" class="note">3<input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note">4<input type="checkbox" class="is-complete" ></div>
        <div id="5" class="note">5<input type="checkbox" class="is-complete" checked></div>
     </section>   
    `;
    let data = querySelectorAll("div.note < input.is-complete");
    data.forEach(element =>{
        expect(element).toHaveClass('note');
        expect(element.children[0]).toHaveClass('is-complete');
        expect(element.children[0]).toHaveAttribute('type', 'checkbox');
    });
    expect(data.length).toBe(5);

});

test('return a div element  using classes', () => {
    document.body.innerHTML = `
    <div class="div1">
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>

        <div class="div2">
            <p class="note">Some div2 text</p>
            <p>Some div2 text</p>
        </div class="note">
    </div>
    `;
    let data = querySelectorAll("div.div1 < p.note");
    data.forEach(element =>{
        expect(element).toHaveClass('div1');
        expect(element.children[0]).toHaveClass('note');
        expect(element.children[3]).toHaveClass('div2');
    });

    expect(data.length).toBe(1);

});


test('return one div element using id', () => {
    document.body.innerHTML = `
    <div class="div1">
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>

        <div id="div1">
            <p class="note">Some div2 text</p>
            <p>Some div2 text 2</p>
        </div class="note">
    </div>
    `;
    let data = querySelectorAll("div#div1 < p.note");
    data.forEach(element =>{
        expect(element.children[0]).toHaveClass('note');
        expect(element.children[0]).toHaveTextContent(/^Some div2 text$/);
        expect(element.children[1]).toHaveTextContent(/^Some div2 text 2$/);
    });
    expect(data.length).toBe(1);

});


test('return two divs element and nested a p and inside of p an a', () => {
    document.body.innerHTML = `
    <section>
        <div><p class="special"><a href="https://www.google.com">General Text</a></p></div>
        <div><p class="special"><a href="https://www.google.com">General Text</a></p></div>
        <div><p class="note">Some div1 text</p></div>
    </section>
    `;
    let data = querySelectorAll("div < p.special a");
    data.forEach(element =>{
        expect(element.children[0]).toHaveClass('special');
        expect(element.children[0].children[0]).toHaveTextContent(/^General Text$/);
    });    
    expect(data.length).toBe(2);

});

test('return 1 div inside two divs ', () => {
    document.body.innerHTML = `
    <div class="outer">
        <div class="select">
            <div class="inner">
            </div>
        </div>
    </div>
    `;
    let data = querySelectorAll("div.select < div.inner");
    expect(data[0]).toHaveClass('select');
    expect(data[0].children[0]).toHaveClass('inner');
    expect(data.length).toBe(1);
    

});



