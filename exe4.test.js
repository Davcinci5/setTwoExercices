
const querySelectorAll =  require('./exe4');
test('return a list of three elements using classes', () => {
    document.body.innerHTML = `
    <section>
        <div id="1" class="note">1<input type="checkbox" class="is-complete" checked> </div>
        <div id="2" class="note">2</div>
        <div id="3" class="note">3<input type="checkbox" class="is-complete" checked></div>
        <div id="4" class="note">4</div>
        <div id="5" class="note">5<input type="checkbox" class="is-complete" checked></div>
     </section>   
    `;
    let data = querySelectorAll("div.note < input.is-complete[checked]");
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
    expect(data.length).toBe(5);

});

test('return a div element  using classes', () => {
    document.body.innerHTML = `
    <div class="div1">
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>

        <div id="div2">
            <p class="note">Some div2 text</p>
            <p>Some div2 text</p>
        </div class="note">
    </div>
    `;
    let data = querySelectorAll("div.div1 < p.note");
    expect(data.length).toBe(1);

});
test('return two divs elements using classes', () => {
    document.body.innerHTML = `
    <div class="div1">
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>

        <div class="div1">
            <p class="note">Some div2 text</p>
            <p>Some div2 text</p>
        </div class="note">
    </div>
    `;
    let data = querySelectorAll("div.div1 < p.note");
    expect(data.length).toBe(2);

});

test('return one div element using id', () => {
    document.body.innerHTML = `
    <div class="div1">
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>

        <div id="div1">
            <p class="note">Some div2 text</p>
            <p>Some div2 text</p>
        </div class="note">
    </div>
    `;
    let data = querySelectorAll("div#div1 < p.note");
    expect(data.length).toBe(1);

});

test('return a list of one element using pseudo-classes', () => {
    document.body.innerHTML = `
    <section>
        <div id="1" class="note">1<input type="checkbox" class="is-complete"> </div>
        <div id="3" class="note">3<input type="checkbox" class="is-complete" checked></div>
        <div id="5" class="note">5<input type="checkbox" class="is-complete" checked></div>
     </section>   
    `;
    let data = querySelectorAll("div.note < input.is-complete[type='checkbox']:not(:checked)");
    expect(data.length).toBe(1);

});

test('return two divs element using id even one div is nested inside other', () => {
    document.body.innerHTML = `
    <div id="div1">
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>
        <p class="note">Some div1 text</p>

        <div id="div1">
            <p class="note">Some div2 text</p>
            <p>Some div2 text</p>
        </div class="note">
    </div>
    `;
    let data = querySelectorAll("div#div1 < p.note");
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
    expect(data.length).toBe(1);

});