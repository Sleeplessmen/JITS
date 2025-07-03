import Section01 from "./Section01";

// Add mock fetch in a decorator
const mockFetchDecorator = (Story) => {
    window.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve({ message: "Mocked API response!" }),
        });

    return Story();
};

export default {
    title: "Sections/Section01",
    component: Section01,
    decorators: [mockFetchDecorator],
};

export const Default = () => <Section01 />;

