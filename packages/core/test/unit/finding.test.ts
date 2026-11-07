import { expect } from 'chai';
import { Finding } from '../../lib/index.js';

function buildFinding(severity: 'error' | 'warn'): Finding {
    return new Finding({
        rule: 'project/max-files',
        severity,
        message: 'Too many files.',
        file: 'force-app/Sample.xml',
    });
}

describe('Finding', () => {
    it('is an error when its severity is error', () => {
        expect(buildFinding('error').isError()).to.equal(true);
    });

    it('is not an error when its severity is warn', () => {
        expect(buildFinding('warn').isError()).to.equal(false);
    });

    it('is a warning when its severity is warn', () => {
        expect(buildFinding('warn').isWarning()).to.equal(true);
    });

    it('is not a warning when its severity is error', () => {
        expect(buildFinding('error').isWarning()).to.equal(false);
    });

    it('returns the rule that reported it', () => {
        expect(buildFinding('error').getRule()).to.equal('project/max-files');
    });

    it('returns its severity', () => {
        expect(buildFinding('warn').getSeverity()).to.equal('warn');
    });

    it('returns its message', () => {
        expect(buildFinding('error').getMessage()).to.equal('Too many files.');
    });

    it('returns its file', () => {
        expect(buildFinding('error').getFile()).to.equal('force-app/Sample.xml');
    });
});
