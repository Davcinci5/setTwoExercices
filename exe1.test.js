const {flatten_imperative,flatten_declarative} = require('./exe1');

test('EXERCISE 1: execute flatten_imperative with no nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        other: undefined
     };
    const data = flatten_imperative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_other: undefined 
    };
 
    expect(data).toEqual(array);
 });
 test('EXERCISE 1: execute declarative with no nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        other: undefined
     };
    const data = flatten_declarative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_other: undefined 
    };
 
    expect(data).toEqual(array);
 });

test('EXERCISE 1: execute flatten_imperative with one nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: 'CA'
            },
            preferredLocation: {
                city: 'SF',
                state: ['CA', 'MN']
            },
            other: undefined
        }
     };
    const data = flatten_imperative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state: 'CA',
        oldObj_address_preferredLocation_city: 'SF',
        oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
        oldObj_address_other: undefined 
    };
 
    expect(data).toEqual(array);
 });

 test('EXERCISE 1: execute flatten_declarative with one nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: 'CA'
            },
            preferredLocation: {
                city: 'SF',
                state: ['CA', 'MN']
            },
            other: undefined
        }
     };
    const data = flatten_declarative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state: 'CA',
        oldObj_address_preferredLocation_city: 'SF',
        oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
        oldObj_address_other: undefined 
    };
    expect(data).toEqual(array);
 });

 test('EXERCISE 1: execute flatten_declarative with two nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: {one:'CA',two:'DA'}
            },
            preferredLocation: {
                city: {one:'SF',two:'RF'},
                state: ['CA', 'MN']
            },
            other: undefined
        }
     };
    const data = flatten_declarative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state_one: 'CA',
        oldObj_address_location_state_two: 'DA',
        oldObj_address_preferredLocation_city_one: 'SF',
        oldObj_address_preferredLocation_city_two: 'RF',
        oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
        oldObj_address_other: undefined 
    };
    expect(data).toEqual(array);
 });

 test('EXERCISE 1: execute flatten_imperative with two nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: {one:'CA',two:'DA'}
            },
            preferredLocation: {
                city: {one:'SF',two:'RF'},
                state: ['CA', 'MN']
            },
            other: undefined
        }
     };
    const data = flatten_imperative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state_one: 'CA',
        oldObj_address_location_state_two: 'DA',
        oldObj_address_preferredLocation_city_one: 'SF',
        oldObj_address_preferredLocation_city_two: 'RF',
        oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
        oldObj_address_other: undefined 
    };
    expect(data).toEqual(array);
 });

 test('EXERCISE 1: execute flatten_imperative with three nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: {
                    one:'CA',
                    two:'DA'}
            },
            preferredLocation: {
                city: {
                    one:{
                        first:'SF',
                        second:'HN'
                    },
                    two:{
                        first:'RF',
                        second:'RH'
                    }
                },
                state: ['CA', 'MN']
            },
            other: undefined
        }
     };
    const data = flatten_imperative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state_one: 'CA',
        oldObj_address_location_state_two: 'DA',
        oldObj_address_preferredLocation_city_one_first: 'SF',
        oldObj_address_preferredLocation_city_one_second: 'HN',
        oldObj_address_preferredLocation_city_two_first: 'RF',
        oldObj_address_preferredLocation_city_two_second: 'RH',
        oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
        oldObj_address_other: undefined 
    };
    expect(data).toEqual(array);
 });

 test('EXERCISE 1: execute flatten_declarative with three nested object', () =>{
    let oldObj = {
        name: 'Sara',
        gender: 'Apache Attack Helicopter',
        address: {
            location: {
                city: 'SF',
                state: {
                    one:'CA',
                    two:'DA'}
            },
            preferredLocation: {
                city: {
                    one:{
                        first:'SF',
                        second:'HN'
                    },
                    two:{
                        first:'RF',
                        second:'RH'
                    }
                },
                state: ['CA', 'MN']
            },
            other: undefined
        }
     };
    const data = flatten_declarative(oldObj,"oldObj");
    const array = { 
        oldObj_name: 'Sara',
        oldObj_gender: 'Apache Attack Helicopter',
        oldObj_address_location_city: 'SF',
        oldObj_address_location_state_one: 'CA',
        oldObj_address_location_state_two: 'DA',
        oldObj_address_preferredLocation_city_one_first: 'SF',
        oldObj_address_preferredLocation_city_one_second: 'HN',
        oldObj_address_preferredLocation_city_two_first: 'RF',
        oldObj_address_preferredLocation_city_two_second: 'RH',
        oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
        oldObj_address_other: undefined 
    };
    expect(data).toEqual(array);
 });