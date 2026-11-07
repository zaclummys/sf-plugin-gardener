import { expect } from 'chai';
import { ComponentFiles, Configuration, Finding, Rule } from '../../lib/index.js';

class FixedRule extends Rule<null> {
    public constructor(name: string) {
        super({
            name,
            severity: 'error',
        });
    }

    protected read(_: ComponentFiles): null {
        return null;
    }

    public check(_: null): Finding[] {
        return [
            this.report({
                message: this.getName(),
            }),
        ];
    }
}

describe('Configuration', () => {
    it('checks a project with every rule it enables, in order', () => {
        const configuration = new Configuration({
            rules: [
                new FixedRule('first'),
                new FixedRule('second'),
            ],
        });
        const findings = configuration.check(new ComponentFiles({
            componentFiles: [],
        }));
        const messages = findings.map((finding: Finding) => finding.getMessage());

        expect(messages).to.deep.equal([
            'first',
            'second',
        ]);
    });
});
