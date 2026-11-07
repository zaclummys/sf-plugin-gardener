import type { SharingModel } from './sharing-model.js';

export class SharingModels {
    private readonly models: SharingModel[];

    /** @param models The sharing models of the set. */
    public constructor({ models }: { models: SharingModel[] }) {
        this.models = models;
    }

    /**
     * Tells whether the set has a model.
     *
     * @param model The model to look for.
     */
    public includes(model: SharingModel): boolean {
        return this.models.some((candidate) => candidate.equals(model));
    }
}
