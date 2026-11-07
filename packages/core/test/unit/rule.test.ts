import { expect } from 'chai';
import { Component, Components, Rule, type Finding } from '../../lib/index.js';

class CountRule extends Rule<number> {
    public constructor() {
        super({
            name: 'project/count',
            severity: 'warn',
        });
    }

    protected read(components: Components): number {
        return components.countRoots();
    }

    public check(input: number): Finding[] {
        return [
            this.report({
                message: `Counted ${input}.`,
            }),
            this.reportFile({
                message: 'About a file.',
                file: 'force-app/Sample.xml',
            }),
        ];
    }
}

const components = new Components({
    components: [
        new Component({
            name: 'Sample__c',
            type: 'CustomObject',
            path: 'force-app/Sample__c.object-meta.xml',
            child: false,
            reader: {
                readContent: () => ({}),
                measureSize: () => 1,
            },
        }),
    ],
});

describe('Rule', () => {
    it('returns its name', () => {
        const rule = new CountRule();

        expect(rule.getName()).to.equal('project/count');
    });

    it('checks the input that it reads from the components', () => {
        const rule = new CountRule();
        const findings = rule.run(components);

        expect(findings.at(0)?.getMessage()).to.equal('Counted 1.');
    });

    it('reports a finding without a file, with its name and severity', () => {
        const rule = new CountRule();
        const findings = rule.check(3);

        expect(findings.at(0)).to.deep.include({
            rule: 'project/count',
            severity: 'warn',
            message: 'Counted 3.',
            file: null,
        });
    });

    it('reports a finding about a file', () => {
        const rule = new CountRule();
        const findings = rule.check(3);

        expect(findings.at(1)).to.deep.include({
            file: 'force-app/Sample.xml',
        });
    });
});
