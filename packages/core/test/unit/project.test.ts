import { expect } from 'chai';
import { Components, Project } from '../../lib/index.js';

const components = new Components({
    components: [],
});

const project = new Project({
    directory: '/project',
    components,
});

describe('Project', () => {
    it('returns its directory', () => {
        expect(project.getDirectory()).to.equal('/project');
    });

    it('returns its components', () => {
        expect(project.getComponents()).to.equal(components);
    });
});
