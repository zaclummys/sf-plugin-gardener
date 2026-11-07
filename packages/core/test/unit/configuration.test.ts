import { expect } from 'chai';
import { Configuration, Finding, Rule, type Project } from '../../lib/index.js';

class FixedRule extends Rule {
    public constructor(name: string) {
        super({
            name,
            severity: 'error',
        });
    }

    public check(_: { project: Project }): Finding[] {
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
        const findings = configuration.check({
            project: {} as Project,
        });
        const messages = findings.map((finding: Finding) => finding.getMessage());

        expect(messages).to.deep.equal([
            'first',
            'second',
        ]);
    });
});
