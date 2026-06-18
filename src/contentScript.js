var hljs = require('highlight.js/lib/core');

// Register common languages (tree-shaken, only these get bundled)
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('less', require('highlight.js/lib/languages/less'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'));
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'));
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'));
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'));
hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'));
hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'));
hljs.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'));
hljs.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'));

// Short-name aliases → highlight.js language names
var langAliases = {
  js: 'javascript', jsx: 'javascript', mjs: 'javascript', cjs: 'javascript', node: 'javascript',
  ts: 'typescript', tsx: 'typescript',
  py: 'python', py3: 'python', python3: 'python',
  scss: 'scss', less: 'less', stylus: 'less', sass: 'scss', postcss: 'css',
  html: 'xml', svg: 'xml', xhtml: 'xml',
  jsonc: 'json', json5: 'json',
  sh: 'bash', shell: 'bash', zsh: 'bash', fish: 'bash', ksh: 'bash',
  mysql: 'sql', pgsql: 'sql', postgresql: 'sql', sqlite: 'sql', plsql: 'sql', tsql: 'sql', mariadb: 'sql',
  c: 'c', 'c++': 'cpp', cpp: 'cpp', cc: 'cpp', cxx: 'cpp', h: 'cpp', hpp: 'cpp',
  rb: 'ruby',
  yml: 'yaml',
  md: 'markdown', mdx: 'markdown',
  docker: 'dockerfile',
  make: 'makefile', gnumake: 'makefile',
  txt: 'plaintext', text: 'plaintext', plain: 'plaintext',
};

function resolveLang(lang) {
  if (!lang) return null;
  var lower = lang.toLowerCase();
  return langAliases[lower] || lower;
}

// Map highlight.js CSS classes to inline style colors
// Each theme defines its own syntax color palette
var syntaxPalettes = {
  macos: {
    'hljs-keyword': '#569cd6', 'hljs-string': '#ce9178', 'hljs-comment': '#6a9955',
    'hljs-number': '#b5cea8', 'hljs-literal': '#569cd6', 'hljs-type': '#4ec9b0',
    'hljs-title': '#dcdcaa', 'hljs-built_in': '#4ec9b0', 'hljs-params': '#d4d4d4',
    'hljs-meta': '#569cd6', 'hljs-attr': '#9cdcfe', 'hljs-attribute': '#9cdcfe',
    'hljs-selector-tag': '#569cd6', 'hljs-selector-class': '#d7ba7d',
    'hljs-selector-id': '#d7ba7d', 'hljs-selector-pseudo': '#569cd6',
    'hljs-selector-attr': '#9cdcfe', 'hljs-tag': '#569cd6', 'hljs-name': '#569cd6',
    'hljs-variable': '#9cdcfe', 'hljs-operator': '#d4d4d4', 'hljs-punctuation': '#d4d4d4',
    'hljs-subst': '#d4d4d4', 'hljs-regexp': '#ce9178', 'hljs-link': '#569cd6',
    'hljs-symbol': '#b5cea8', 'hljs-deletion': '#f44747', 'hljs-addition': '#6a9955',
    'hljs-quote': '#6a9955', 'hljs-section': '#569cd6', 'hljs-bullet': '#d7ba7d',
    'hljs-code': '#ce9178', 'hljs-formula': '#d4d4d4',
  },
  github: {
    'hljs-keyword': '#cf222e', 'hljs-string': '#0a3069', 'hljs-comment': '#6e7781',
    'hljs-number': '#0550ae', 'hljs-literal': '#cf222e', 'hljs-type': '#0550ae',
    'hljs-title': '#8250df', 'hljs-built_in': '#0550ae', 'hljs-params': '#24292f',
    'hljs-meta': '#cf222e', 'hljs-attr': '#8250df', 'hljs-attribute': '#8250df',
    'hljs-selector-tag': '#116329', 'hljs-selector-class': '#8250df',
    'hljs-selector-id': '#8250df', 'hljs-selector-pseudo': '#cf222e',
    'hljs-selector-attr': '#8250df', 'hljs-tag': '#116329', 'hljs-name': '#116329',
    'hljs-variable': '#953800', 'hljs-operator': '#24292f', 'hljs-punctuation': '#24292f',
    'hljs-subst': '#24292f', 'hljs-regexp': '#0a3069', 'hljs-link': '#0550ae',
    'hljs-symbol': '#0550ae', 'hljs-deletion': '#82071e', 'hljs-addition': '#116329',
    'hljs-quote': '#6e7781', 'hljs-section': '#cf222e', 'hljs-bullet': '#953800',
    'hljs-code': '#0a3069', 'hljs-formula': '#24292f',
  },
  carbon: {
    'hljs-keyword': '#c792ea', 'hljs-string': '#c3e88d', 'hljs-comment': '#676e95',
    'hljs-number': '#f78c6c', 'hljs-literal': '#c792ea', 'hljs-type': '#ffcb6b',
    'hljs-title': '#82aaff', 'hljs-built_in': '#ffcb6b', 'hljs-params': '#e6e6e6',
    'hljs-meta': '#c792ea', 'hljs-attr': '#ffcb6b', 'hljs-attribute': '#ffcb6b',
    'hljs-selector-tag': '#f07178', 'hljs-selector-class': '#ffcb6b',
    'hljs-selector-id': '#ffcb6b', 'hljs-selector-pseudo': '#c792ea',
    'hljs-selector-attr': '#ffcb6b', 'hljs-tag': '#f07178', 'hljs-name': '#f07178',
    'hljs-variable': '#e6e6e6', 'hljs-operator': '#89ddff', 'hljs-punctuation': '#89ddff',
    'hljs-subst': '#e6e6e6', 'hljs-regexp': '#c3e88d', 'hljs-link': '#82aaff',
    'hljs-symbol': '#f78c6c', 'hljs-deletion': '#f07178', 'hljs-addition': '#c3e88d',
    'hljs-quote': '#676e95', 'hljs-section': '#c792ea', 'hljs-bullet': '#ffcb6b',
    'hljs-code': '#c3e88d', 'hljs-formula': '#e6e6e6',
  },
  notion: {
    'hljs-keyword': '#9b5993', 'hljs-string': '#df7300', 'hljs-comment': '#9b9a97',
    'hljs-number': '#3860c2', 'hljs-literal': '#9b5993', 'hljs-type': '#2f7e4a',
    'hljs-title': '#6a3e9b', 'hljs-built_in': '#2f7e4a', 'hljs-params': '#37352f',
    'hljs-meta': '#9b5993', 'hljs-attr': '#3860c2', 'hljs-attribute': '#3860c2',
    'hljs-selector-tag': '#d03c3c', 'hljs-selector-class': '#6a3e9b',
    'hljs-selector-id': '#6a3e9b', 'hljs-selector-pseudo': '#9b5993',
    'hljs-selector-attr': '#3860c2', 'hljs-tag': '#d03c3c', 'hljs-name': '#d03c3c',
    'hljs-variable': '#37352f', 'hljs-operator': '#37352f', 'hljs-punctuation': '#9b9a97',
    'hljs-subst': '#37352f', 'hljs-regexp': '#df7300', 'hljs-link': '#3860c2',
    'hljs-symbol': '#3860c2', 'hljs-deletion': '#d03c3c', 'hljs-addition': '#0f7b6c',
    'hljs-quote': '#9b9a97', 'hljs-section': '#9b5993', 'hljs-bullet': '#df7300',
    'hljs-code': '#df7300', 'hljs-formula': '#37352f',
  },
  material: {
    'hljs-keyword': '#7c4dff', 'hljs-string': '#50a14f', 'hljs-comment': '#a0a0a0',
    'hljs-number': '#e45649', 'hljs-literal': '#7c4dff', 'hljs-type': '#00897b',
    'hljs-title': '#d81b60', 'hljs-built_in': '#00897b', 'hljs-params': '#212121',
    'hljs-meta': '#7c4dff', 'hljs-attr': '#1976d2', 'hljs-attribute': '#1976d2',
    'hljs-selector-tag': '#d32f2f', 'hljs-selector-class': '#d81b60',
    'hljs-selector-id': '#d81b60', 'hljs-selector-pseudo': '#7c4dff',
    'hljs-selector-attr': '#1976d2', 'hljs-tag': '#d32f2f', 'hljs-name': '#d32f2f',
    'hljs-variable': '#212121', 'hljs-operator': '#212121', 'hljs-punctuation': '#a0a0a0',
    'hljs-subst': '#212121', 'hljs-regexp': '#50a14f', 'hljs-link': '#1976d2',
    'hljs-symbol': '#e45649', 'hljs-deletion': '#d32f2f', 'hljs-addition': '#388e3c',
    'hljs-quote': '#a0a0a0', 'hljs-section': '#7c4dff', 'hljs-bullet': '#e45649',
    'hljs-code': '#50a14f', 'hljs-formula': '#212121',
  },
  terminal: {
    'hljs-keyword': '#9d7cd8', 'hljs-string': '#9ece6a', 'hljs-comment': '#565f89',
    'hljs-number': '#ff9e64', 'hljs-literal': '#ff9e64', 'hljs-type': '#2ac3de',
    'hljs-title': '#7aa2f7', 'hljs-built_in': '#7dcfff', 'hljs-params': '#a9b1d6',
    'hljs-meta': '#9d7cd8', 'hljs-attr': '#e0af68', 'hljs-attribute': '#e0af68',
    'hljs-selector-tag': '#f7768e', 'hljs-selector-class': '#e0af68',
    'hljs-selector-id': '#e0af68', 'hljs-selector-pseudo': '#9d7cd8',
    'hljs-selector-attr': '#e0af68', 'hljs-tag': '#f7768e', 'hljs-name': '#f7768e',
    'hljs-variable': '#c0caf5', 'hljs-operator': '#89ddff', 'hljs-punctuation': '#89ddff',
    'hljs-subst': '#c0caf5', 'hljs-regexp': '#9ece6a', 'hljs-link': '#7aa2f7',
    'hljs-symbol': '#ff9e64', 'hljs-deletion': '#f7768e', 'hljs-addition': '#9ece6a',
    'hljs-quote': '#565f89', 'hljs-section': '#9d7cd8', 'hljs-bullet': '#e0af68',
    'hljs-code': '#9ece6a', 'hljs-formula': '#c0caf5',
  },
};

// Match any class="..." attribute containing hljs-* classes
// highlight.js outputs both single classes (class="hljs-keyword") and
// multi-class tokens (class="hljs-title function_") — we need to handle both.
var hljsClassRE = /class="([^"]*)"/g;

function applySyntaxColors(html, palette) {
  if (!palette) return html;
  return html.replace(hljsClassRE, function (match, classList) {
    var tokens = classList.split(/\s+/);
    var best = null;
    for (var i = 0; i < tokens.length; i++) {
      if (palette[tokens[i]]) {
        best = tokens[i];
        break;
      }
    }
    if (best) {
      var style = 'color:' + palette[best];
      if (best === 'hljs-comment') style += ';font-style:italic';
      if (best === 'hljs-deletion' || best === 'hljs-addition') style += ';text-decoration:underline';
      if (best === 'hljs-link') style += ';text-decoration:underline';
      if (best === 'hljs-emphasis') style = 'font-style:italic';
      if (best === 'hljs-strong') style = 'font-weight:bold';
      return 'style="' + style + '"';
    }
    return match;
  });
}

module.exports = {
  default: function (_context) {
    // Theme definitions (wrapper styling only)
    var themes = {
      macos: {
        bg: '#1e1e1e', text: '#d4d4d4', border: '#333',
        headerBg: '#2d2d2d', headerBorder: '#3a3a3a',
        dotRed: '#ff5f57', dotYellow: '#febc2e', dotGreen: '#28c840',
        langColor: '#999', shadow: '0 2px 8px rgba(0,0,0,0.15)',
      },
      github: {
        bg: '#f6f8fa', text: '#24292f', border: '#d0d7de',
        headerBg: '#eaeef2', headerBorder: '#d0d7de',
        dotRed: '#cf222e', dotYellow: '#d4a72c', dotGreen: '#1a7f37',
        langColor: '#57606a', shadow: '0 1px 3px rgba(0,0,0,0.08)',
      },
      carbon: {
        bg: '#161616', text: '#f2f2f2', border: '#393939',
        headerBg: '#262626', headerBorder: '#393939',
        dotRed: '#ee5396', dotYellow: '#f1c21b', dotGreen: '#25be6a',
        langColor: '#8d8d8d', shadow: '0 2px 12px rgba(0,0,0,0.3)',
      },
      notion: {
        bg: '#ffffff', text: '#37352f', border: '#e3e2e0',
        headerBg: '#f7f6f4', headerBorder: '#e3e2e0',
        dotRed: '#e03e3e', dotYellow: '#dfab00', dotGreen: '#0f7b6c',
        langColor: '#9b9a97', shadow: '0 0 0 1px rgba(0,0,0,0.03)',
      },
      material: {
        bg: '#263238', text: '#eeffff', border: '#37474f',
        headerBg: '#37474f', headerBorder: '#455a64',
        dotRed: '#ff5252', dotYellow: '#ffab40', dotGreen: '#69f0ae',
        langColor: '#b0bec5', shadow: '0 3px 6px rgba(0,0,0,0.2)',
      },
      terminal: {
        bg: '#0c0c0c', text: '#00ff41', border: '#1a1a1a',
        headerBg: '#161616', headerBorder: '#1a1a1a',
        dotRed: '#ff3333', dotYellow: '#ffcc00', dotGreen: '#33ff33',
        langColor: '#00cc33', shadow: '0 4px 16px rgba(0,0,0,0.5)',
      },
    };

    function highlightCode(code, lang, palette) {
      var hljsLang = resolveLang(lang);
      var result;
      if (hljsLang && hljs.getLanguage(hljsLang)) {
        result = hljs.highlight(code, { language: hljsLang, ignoreIllegals: true });
      } else {
        result = hljs.highlightAuto(code);
      }
      if (result.value) {
        return applySyntaxColors(result.value, palette);
      }
      return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    return {
      plugin: function (markdownIt, pluginOptions) {
        function getSetting(key, defaultVal) {
          try {
            if (pluginOptions && typeof pluginOptions.settingValue === 'function') {
              var val = pluginOptions.settingValue(key);
              if (val !== undefined && val !== null) return val;
            }
          } catch (_) {}
          return defaultVal;
        }

        var currentTheme = getSetting('codeTheme', 'macos');
        var showHeader = getSetting('showHeader', true);
        var showLineNumbers = getSetting('showLineNumbers', false);
        var theme = themes[currentTheme] || themes['macos'];
        var palette = syntaxPalettes[currentTheme] || syntaxPalettes['macos'];

        markdownIt.renderer.rules.fence = function (tokens, idx, opts, env, slf) {
          var token = tokens[idx];
          var info = token.info ? token.info.trim() : '';
          var lang = info ? info.split(/\s+/g)[0] : '';
          var langDisplay = lang || 'code';

          var highlighted = highlightCode(token.content, lang, palette);

          var lines = highlighted.split('\n');

          var dotsHtml = showHeader
            ? '<span class="cb-dots"><span class="cb-dot" style="background:' + theme.dotRed + '"></span><span class="cb-dot" style="background:' + theme.dotYellow + '"></span><span class="cb-dot" style="background:' + theme.dotGreen + '"></span></span>'
            : '';

          var langHtml = showHeader
            ? '<span class="cb-lang" style="font-size:0.78em;opacity:0.7;letter-spacing:0.3px;color:' + theme.langColor + '">' + langDisplay + '</span>'
            : '';

          var headerHtml = showHeader
            ? '<div class="cb-header" style="display:flex;align-items:center;justify-content:space-between;padding:8px 14px;user-select:none;background:' + theme.headerBg + ';border-bottom:1px solid ' + theme.headerBorder + '">' + dotsHtml + langHtml + '</div>'
            : '';

          var codePreStyle = 'margin:0;padding:16px;color:' + theme.text + ';font-family:inherit;font-size:inherit;line-height:inherit;border:0;background:transparent;overflow-x:auto;';
          var codeTagStyle = 'display:block;color:inherit;font-family:inherit;font-size:inherit;line-height:inherit;background:transparent;padding:0;border:0;white-space:pre;';

          var bodyHtml;
          if (showLineNumbers) {
            var lnText = '';
            for (var i = 0; i < lines.length; i++) {
              lnText += (i + 1) + '\n';
            }
            var codeWithBreaks = '';
            for (i = 0; i < lines.length; i++) {
              codeWithBreaks += lines[i] + '\n';
            }
            bodyHtml = '<div style="display:flex;">'
              + '<pre style="flex:none;margin:0;padding:16px 10px 16px 16px;text-align:right;user-select:none;color:' + theme.langColor + ';font-family:inherit;font-size:inherit;line-height:inherit;border:0;background:transparent;">' + lnText + '</pre>'
              + '<pre style="flex:1;min-width:0;' + codePreStyle + '"><code style="' + codeTagStyle + '">' + codeWithBreaks + '</code></pre>'
              + '</div>';
          } else {
            bodyHtml = '<pre style="' + codePreStyle + '"><code style="' + codeTagStyle + '">' + highlighted + '\n</code></pre>';
          }

          return (
            '<div class="cb-wrapper cb-theme-' + currentTheme + (showHeader ? '' : ' cb-no-header') + '" data-lang="' + langDisplay + '" style="margin:16px 0;border-radius:8px;overflow:hidden;box-shadow:' + theme.shadow + ';border:1px solid ' + theme.border + ';background:' + theme.bg + ';color:' + theme.text + ';font-family:var(--joplin-code-font-family,\'SF Mono\',\'Fira Code\',Consolas,monospace);font-size:0.875em;line-height:1.6;' + (!showHeader ? 'padding-top:0;' : '') + '">' +
            headerHtml +
            '<div class="cb-body" style="position:relative;">' +
            bodyHtml +
            '</div>' +
            '</div>'
          );
        };
      },

      assets: function () {
        return [
          { name: 'themes/base.css' },
          { name: 'themes/macos.css' },
          { name: 'themes/github.css' },
          { name: 'themes/carbon.css' },
          { name: 'themes/notion.css' },
          { name: 'themes/material.css' },
          { name: 'themes/terminal.css' },
        ];
      },
    };
  },
};
