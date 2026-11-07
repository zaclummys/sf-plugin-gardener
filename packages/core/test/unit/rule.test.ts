import { expect } from 'chai';
import { Rule, type Finding, type Project } from '../../lib/index.js';

class ReportingRule extends Rule {
    public constructor() {
        super({
            name: 'project/reporting',
            severity: 'warn',
        });
    }

    public check({ project }: { project: Project }): Finding[] {
        return [
            this.report({
                message: `About ${project.getDirectory()}.`,
            }),
            this.reportFile({
                message: 'About a file.',
                file: 'force-app/Sample.xml',
            }),
        ];
    }
}

describe('Rule', () => {
    it('returns its name', () => {
        const rule = new ReportingRule();

        expect(rule.getName()).to.equal('project/reporting');
    });

    it('reports a finding about the project, with its name and severity', () => {
        const rule = new ReportingRule();
        const [finding] = rule.check({
            project: {
                getDirectory: () => '/project',
            } as Project,
        });

        expect(finding).to.deep.include({
            rule: 'project/reporting',
            severity: 'warn',
            message: 'About /project.',
            file: null,
        });
    });

    it('reports a finding about a file', () => {
        const rule = new ReportingRule();
        const findings = rule.check({
            project: {
                getDirectory: () => '/project',
            } as Project,
        });

        expect(findings.at(1)).to.deep.include({
            file: 'force-app/Sample.xml',
        });
    });
});
