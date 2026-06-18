declare const joplin: any;

joplin.plugins.register({
  onStart: async () => {
    await joplin.settings.registerSection('codeBeautifier', {
      label: 'Code Block Beautifier',
      iconName: 'fas fa-code',
    });

    await joplin.settings.registerSettings({
      codeTheme: {
        value: 'macos',
        type: 2,
        section: 'codeBeautifier',
        public: true,
        label: 'Code block theme',
        isEnum: true,
        options: {
          macos: 'macOS Window',
          github: 'GitHub',
          carbon: 'Carbon',
          notion: 'Notion',
          material: 'Material Card',
          terminal: 'Modern Terminal',
        },
      },
      showHeader: {
        value: true,
        type: 3,
        section: 'codeBeautifier',
        public: true,
        label: 'Show header bar',
      },
      showLineNumbers: {
        value: false,
        type: 3,
        section: 'codeBeautifier',
        public: true,
        label: 'Show line numbers',
      },
    });

    await joplin.contentScripts.register(
      'markdownItPlugin',
      'codeBeautifier',
      './contentScript.js'
    );
  },
});
