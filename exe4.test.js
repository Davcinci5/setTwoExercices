
const querySelectorAll =  require('./exe4');
test('return a list of three elements', () => {
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

test('return a list of five elements', () => {
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

test('return a list of three p elements', () => {
    document.body.innerHTML = `
    <div class="div1">
        <p>Some div1 text</p>
        <p>Some div1 text</p>
        <p>Some div1 text</p>

        <div id="div2">
        <p>Some div2 text</p>
        <p>Some div2 text</p>
        </div>
    </div>
    `;
    let data = querySelectorAll("div.div1 < p");
    expect(data.length).toBe(3);

});