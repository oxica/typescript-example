const profile = {
    name: 'John',
    age: 20,
    coordinates: {
        lat: 10,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profile;

const {coordinates: {lat, lng}}: {coordinates: {lat: number, lng: number}} = profile;



