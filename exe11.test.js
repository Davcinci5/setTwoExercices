let set =  require('./exe11');

test('structure object -> function -> obj -> new property, success',()=>{
    const fn = ()=>{};
    fn.b = {};
    const obj= { a: { fn }};

    set(obj,"a.fn.b.new_prop",15);
    expect(obj.a.fn.b.new_prop).toBe(15);
});

test('structure object -> obj -> array -> obj -> function -> new property, success',()=>{
    const to = [1,2,3];
    to.deeply = {};
    to.deeply.nested = ()=>{};
    const obj= { path: { to }};

    set(obj, 'path.to.deeply.nested.property', 42);
    expect(obj.path.to.deeply.nested.property).toBe(42);
});

test('structure -> function -> array -> obj -> function -> new property, success',()=>{
    const obj= {};
    obj.fn = ()=>{};
    obj.fn.arre  = [6,7,8];
    obj.fn.arre.obj ={};
    obj.fn.arre.obj.fn = ()=>{};
    set(obj, 'fn.arre.obj.fn.property', [9,10,11]);
    expect(obj.fn.arre.obj.fn.property).toEqual([9,10,11]);
});

test('structure array -> array -> function -> function -> object -> new property, success',()=>{
    const obj= {};
    obj.arre = [0,1,2];
    obj.arre.arre  = [6,7,8];
    obj.arre.arre.fn =()=>{};
    obj.arre.arre.fn.fn = ()=>{};
    obj.arre.arre.fn.fn.obj={};
    let fn = () =>{};
    set(obj,'arre.arre.fn.fn.obj.value', fn);
    expect(obj.arre.arre.fn.fn.obj.value).toEqual(fn);
});

test('throw error, found a number nested',()=>{
    const fn = ()=>{};
    fn.b = 1;
    const obj= { a: { fn }};
    try{
        set(obj,"a.fn.b.new_prop",15);
    }catch({message:e}){
        expect(e).toBe('error');
    }
});

test('throw error, found a boolean nested value',()=>{
    const boolean = false;
    boolean.b = 1;
    const obj= { a: { boolean }};
    try{
        set(obj,"a.fn.b.new_prop",15);
    }catch({message:e}){
        expect(e).toBe('error');
    }
});

test('throw error, found a string nested value',()=>{
    const obj= {};
    obj.arre = [0,1,2];
    obj.arre.arre  = [6,7,8];
    obj.arre.arre.fn =()=>{};
    obj.arre.arre.fn.fn = ()=>{};
    obj.arre.arre.fn.fn.string='abc';
    let fn = () =>{};
    try{
        set(obj,'arre.arre.fn.fn.string.value', fn);
        expect(obj.arre.arre.fn.fn.string.value).toEqual(fn);
    }catch({message:e}){
        expect(e).toBe('error');
    }
});
test('throw error, found a null nested value',()=>{
    const obj= {};
    obj.arre = [0,1,2];
    obj.arre.arre  = [6,7,8];
    obj.arre.arre.fn =()=>{};
    obj.arre.arre.fn.fn = ()=>{};
    obj.arre.arre.fn.fn.null=null;
    let fn = () =>{};
    try{
        set(obj,'arre.arre.fn.fn.null.value', fn);
        expect(obj.arre.arre.fn.fn.null.value).toEqual(fn);
    }catch({message:e}){
        expect(e).toBe('error');
    }
});

test('create 4 missing properties and set value 1, success',()=>{
    let obj= {};
    set(obj,"a.b.c.d",1);
    expect(obj.a.b.c.d).toBe(1);

});