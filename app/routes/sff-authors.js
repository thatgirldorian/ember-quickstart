import Route from '@ember/routing/route';

export default class SffAuthorsRoute extends Route {
    model() {
        return ['R.F Kuang', 'Nnedi Okoroafor', 'N.K Jemisin', 'S.A Chakraborty', 'Octavia Butler', 'Rebecca Roanhorse', 'Silvia Moreno-Garcia'];
    }
}
