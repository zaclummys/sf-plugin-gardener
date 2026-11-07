import { expect } from 'chai';
import { defineSeverityOnlySchema, severitySchema, Rule, type Finding } from '../../lib/index.js';

class SeverityRule extends Rule<null> {
    public constructor({ severity }: { severity: 'error' | 'warn' }) {
        super({
            name: 'project/severity',
            severity,
        });
    }

    protected read(): null {
        return null;
    }

    public check(): Finding[] {
        return [
            this.report({
                message: 'Reported.',
            }),
        ];
    }
}

const schema = defineSeverityOnlySchema((properties) => new SeverityRule(properties));

function readSeverity(entry: unknown): string {
    const rule = schema.parse(entry);
    const [finding] = rule.run({
        components: undefined as never,
    });

    return finding.getSeverity();
}

describe('rule schemas', () => {
    it('accepts error and warn as a severity', () => {
        expect(severitySchema.safeParse('warn').success).to.equal(true);
    });

    it('rejects any other text as a severity', () => {
        expect(severitySchema.safeParse('off').success).to.equal(false);
    });

    it('reads a rule from a severity alone', () => {
        expect(readSeverity('error')).to.equal('error');
    });

    it('reads a rule from an object that holds the severity', () => {
        expect(readSeverity({
            severity: 'warn',
        })).to.equal('warn');
    });

    it('rejects an entry with an invalid severity', () => {
        expect(schema.safeParse('off').success).to.equal(false);
    });
});
