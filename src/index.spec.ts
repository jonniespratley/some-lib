import { hello } from '.';
import { expect } from '@esm-bundle/chai';
describe('index', () => {
    describe('test', () => {
        it('should return 42', () => {
            const result = hello();

            expect(result).equal(42);
        });
    });
});
