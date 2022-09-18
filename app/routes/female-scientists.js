import Route from '@ember/routing/route';

export default class FemaleScientistsRoute extends Route {
    model() {
        return [
            'Katherine Johnson',
            'Marie Curie',
            'Rosalind Franklin',
            'Tiera Guinn',
            'Jane Goddall'
        ];
    }
}
