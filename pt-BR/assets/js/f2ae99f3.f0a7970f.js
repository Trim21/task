"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[211],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return k}});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return o.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?o.createElement(k,i(i({ref:a},u),{},{components:t})):o.createElement(k,i({ref:a},u))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3470:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var o=t(3117),n=(t(7294),t(3905));const r={slug:"/installation/",sidebar_position:2},i="Instala\xe7\xe3o",l={unversionedId:"installation",id:"installation",title:"Instala\xe7\xe3o",description:"H\xe1 muitas maneiras poss\xedveis de se instalar o Task. Confira os m\xe9todos dispon\xedveis abaixo.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation/",permalink:"/pt-BR/installation/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/installation/",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"P\xe1gina Inicial",permalink:"/pt-BR/"},next:{title:"Guia de Uso",permalink:"/pt-BR/usage/"}},s={},p=[{value:"Gerenciador de Pacotes",id:"gerenciador-de-pacotes",level:2},{value:"Homebrew",id:"homebrew",level:3},{value:"Snap",id:"snap",level:3},{value:"Chocolatey",id:"chocolatey",level:3},{value:"Scoop",id:"scoop",level:3},{value:"AUR",id:"aur",level:3},{value:"Fedora",id:"fedora",level:3},{value:"Nix",id:"nix",level:3},{value:"npm",id:"npm",level:3},{value:"Winget",id:"winget",level:3},{value:"Baixe o Bin\xe1rio",id:"baixe-o-bin\xe1rio",level:2},{value:"Bin\xe1rio",id:"bin\xe1rio",level:3},{value:"Script de instala\xe7\xe3o",id:"script-de-instala\xe7\xe3o",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Compilar do c\xf3digo-fonte",id:"compilar-do-c\xf3digo-fonte",level:2},{value:"Go Modules",id:"go-modules",level:3},{value:"Configurar <em>auto-complete</em> de terminal",id:"configurar-auto-complete-de-terminal",level:2},{value:"Bash",id:"bash",level:3},{value:"ZSH",id:"zsh",level:3},{value:"Fish",id:"fish",level:3},{value:"PowerShell",id:"powershell",level:3}],u={toc:p};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,n.kt)("p",null,"H\xe1 muitas maneiras poss\xedveis de se instalar o Task. Confira os m\xe9todos dispon\xedveis abaixo."),(0,n.kt)("h2",{id:"gerenciador-de-pacotes"},"Gerenciador de Pacotes"),(0,n.kt)("h3",{id:"homebrew"},"Homebrew"),(0,n.kt)("p",null,"Se voc\xea estiver no macOS ou Linux e tiver o ",(0,n.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," instalado, instalar o Task \xe9 t\xe3o simples quanto rodar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"brew install go-task/tap/go-task\n")),(0,n.kt)("p",null,"A f\xf3rmula acima \xe9 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-task/homebrew-tap/blob/master/Formula/go-task.rb"},"mantida por n\xf3s mesmos"),"."),(0,n.kt)("p",null,"Recentemente, o Task tamb\xe9m foi disponibilizado ",(0,n.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/go-task"},"no reposit\xf3rio oficial do Homebrew"),", ent\xe3o voc\xea tamb\xe9m tem essa op\xe7\xe3o, se preferir:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"brew install go-task\n")),(0,n.kt)("h3",{id:"snap"},"Snap"),(0,n.kt)("p",null,"O Task est\xe1 dispon\xedvel no ",(0,n.kt)("a",{parentName:"p",href:"https://snapcraft.io/task"},"Snapcraft"),", mas tenha em mente que a sua distribui\xe7\xe3o Linux deve suportar confinamento cl\xe1ssico (",(0,n.kt)("em",{parentName:"p"},"classic confinement"),") para Snaps para o Task funcionar corretamente:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install task --classic\n")),(0,n.kt)("h3",{id:"chocolatey"},"Chocolatey"),(0,n.kt)("p",null,"Se voc\xea estiver no Windows e tiver o ",(0,n.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," instalado, instalar o Task \xe9 t\xe3o simples quanto rodar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"choco install go-task\n")),(0,n.kt)("p",null,"Este m\xe9todo de instala\xe7\xe3o \xe9 mantido pela comunidade."),(0,n.kt)("h3",{id:"scoop"},"Scoop"),(0,n.kt)("p",null,"Se voc\xea est\xe1 no Windows e tem o ",(0,n.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop")," instalado, instalar o Task \xe9 t\xe3o simples quanto rodar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"scoop install task\n")),(0,n.kt)("p",null,"Este m\xe9todo de instala\xe7\xe3o \xe9 mantido pela comunidade. Ap\xf3s o lan\xe7amento de uma nova vers\xe3o do Task, pode levar algum tempo at\xe9 que esteja dispon\xedvel no Scoop."),(0,n.kt)("h3",{id:"aur"},"AUR"),(0,n.kt)("p",null,"Se voc\xea estiver no Arch Linux, voc\xea pode instalar o Task a partir do ",(0,n.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/go-task-bin"},"AUR")," usando o seu gerenciador de pacotes favorito, como ",(0,n.kt)("inlineCode",{parentName:"p"},"yay"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"pacauro")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"yaourt"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"yay -S go-task-bin\n")),(0,n.kt)("p",null,"Alternativamente, h\xe1 ",(0,n.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/go-task"},"este pacote")," que instala do c\xf3digo fonte ao inv\xe9s de baixar o bin\xe1rio ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/releases"},"do GitHub"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"yay -S go-task\n")),(0,n.kt)("p",null,"Este m\xe9todo de instala\xe7\xe3o \xe9 mantido pela comunidade."),(0,n.kt)("h3",{id:"fedora"},"Fedora"),(0,n.kt)("p",null,"Se voc\xea estiver no Fedora Linux, voc\xea pode instalar o Task do ",(0,n.kt)("a",{parentName:"p",href:"https://packages.fedoraproject.org/pkgs/golang-github-task/go-task/"},"reposit\xf3rio oficial do Fedora")," usando ",(0,n.kt)("inlineCode",{parentName:"p"},"dnf"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"sudo dnf install go-task\n")),(0,n.kt)("p",null,"Este m\xe9todo de instala\xe7\xe3o \xe9 mantido pela comunidade. Ap\xf3s o lan\xe7amento de uma nova vers\xe3o do Task, pode levar algum tempo at\xe9 que ela esteja dispon\xedvel no ",(0,n.kt)("a",{parentName:"p",href:"https://packages.fedoraproject.org/pkgs/golang-github-task/go-task/"},"Fedora"),"."),(0,n.kt)("h3",{id:"nix"},"Nix"),(0,n.kt)("p",null,"Se voc\xea estiver no NixOS ou tiver o Nix instalado, voc\xea pode instalar o Task a partir do ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs"},"nixpkgs"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cmd"},"nix-env -iA nixpkgs.go-task\n")),(0,n.kt)("p",null,"Este m\xe9todo de instala\xe7\xe3o \xe9 mantido pela comunidade. Ap\xf3s o lan\xe7amento de uma nova vers\xe3o do Task, pode levar algum tempo at\xe9 que ela esteja dispon\xedvel em ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs"},"nixpkgs"),"."),(0,n.kt)("h3",{id:"npm"},"npm"),(0,n.kt)("p",null,"Voc\xea tamb\xe9m pode usar o Node e o npm para instalar o Task instalando ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@go-task/cli"},"este pacote"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @go-task/cli\n")),(0,n.kt)("h3",{id:"winget"},"Winget"),(0,n.kt)("p",null,"Se voc\xea estiver usando o Windows e instalando a ferramenta de gerenciamento de pacotes ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/winget-cli"},"winget"),", voc\xea pode instalar o Task a partir de ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/winget-pkgs"},"winget-pkgs"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"winget install Task.Task\n")),(0,n.kt)("h2",{id:"baixe-o-bin\xe1rio"},"Baixe o Bin\xe1rio"),(0,n.kt)("h3",{id:"bin\xe1rio"},"Bin\xe1rio"),(0,n.kt)("p",null,"Voc\xea pode baixar o bin\xe1rio da ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/releases"},"p\xe1gina de vers\xf5es no GitHub")," e adicionar a sua vari\xe1vel de ambiente ",(0,n.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,n.kt)("p",null,"Os pacotes DEB e RPM tamb\xe9m est\xe3o dispon\xedveis."),(0,n.kt)("p",null,"O arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"task_checksums.txt")," cont\xe9m a ",(0,n.kt)("em",{parentName:"p"},"checksum")," SHA-256 para cada arquivo."),(0,n.kt)("h3",{id:"script-de-instala\xe7\xe3o"},"Script de instala\xe7\xe3o"),(0,n.kt)("p",null,"Tamb\xe9m temos um ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/blob/main/install-task.sh"},"script de instala\xe7\xe3o")," que \xe9 muito \xfatil em cen\xe1rios, como CI. Muito obrigado ao ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/goreleaser/godownloader"},"GoDownloader")," por permitir a gera\xe7\xe3o f\xe1cil deste script."),(0,n.kt)("p",null,"Por padr\xe3o, o bin\xe1rio ser\xe1 baixado no diret\xf3rio ",(0,n.kt)("inlineCode",{parentName:"p"},"./bin")," em rela\xe7\xe3o ao diret\xf3rio atual:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d\n')),(0,n.kt)("p",null,"\xc9 poss\xedvel substituir o diret\xf3rio de instala\xe7\xe3o com o par\xe2metro ",(0,n.kt)("inlineCode",{parentName:"p"},"-b"),". No Linux, escolhas comuns s\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.local/bin")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"~/bin")," para instalar para o usu\xe1rio ou ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," para instalar para todos os usu\xe1rios:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b ~/.local/bin\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"No macOS e Windows, ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.local/bin")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"~/bin")," n\xe3o s\xe3o adicionados ao ",(0,n.kt)("inlineCode",{parentName:"p"},"$PATH")," por padr\xe3o.")),(0,n.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,n.kt)("p",null,"Se voc\xea quiser instalar o Task no GitHub Actions voc\xea pode tentar usar ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/arduino/setup-task"},"esta ",(0,n.kt)("em",{parentName:"a"},"action"))," pela equipe do Arduino:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Install Task\n  uses: arduino/setup-task@v1\n  with:\n    version: 3.x\n    repo-token: ${{ secrets.GITHUB_TOKEN }}\n")),(0,n.kt)("p",null,"Este m\xe9todo de instala\xe7\xe3o \xe9 mantido pela comunidade."),(0,n.kt)("h2",{id:"compilar-do-c\xf3digo-fonte"},"Compilar do c\xf3digo-fonte"),(0,n.kt)("h3",{id:"go-modules"},"Go Modules"),(0,n.kt)("p",null,"Certifique-se de que voc\xea tem uma vers\xe3o suportada do ",(0,n.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go")," corretamente instalado e configurado. Voc\xea pode encontrar a vers\xe3o m\xednima necess\xe1ria do Go no arquivo ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/blob/main/go.mod#L3"},"go.mod"),"."),(0,n.kt)("p",null,"Voc\xea pode ent\xe3o instalar a \xfaltima vers\xe3o globalmente ao rodar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/go-task/task/v3/cmd/task@latest\n")),(0,n.kt)("p",null,"Ou voc\xea pode instalar em outro diret\xf3rio rodando:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"env GOBIN=/bin go install github.com/go-task/task/v3/cmd/task@latest\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Para ambientes com CI, recomendamos usar o ",(0,n.kt)("a",{parentName:"p",href:"#install-script"},"script de instala\xe7\xe3o"),", que \xe9 mais r\xe1pido e mais est\xe1vel, j\xe1 que ele apenas baixar\xe1 o \xfaltimo bin\xe1rio lan\xe7ado.")),(0,n.kt)("h2",{id:"configurar-auto-complete-de-terminal"},"Configurar ",(0,n.kt)("em",{parentName:"h2"},"auto-complete")," de terminal"),(0,n.kt)("p",null,"Baixe o arquivo de ",(0,n.kt)("em",{parentName:"p"},"auto-completion")," correspondente ao seu terminal."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/tree/main/completion"},"Todos os scripts de ",(0,n.kt)("em",{parentName:"a"},"completion")," est\xe3o dispon\xedveis no reposit\xf3rio do Task"),"."),(0,n.kt)("h3",{id:"bash"},"Bash"),(0,n.kt)("p",null,"Primeiro, certifique-se de que voc\xea instalou o ",(0,n.kt)("em",{parentName:"p"},"bash-completion")," usando seu gerenciador de pacotes."),(0,n.kt)("p",null,"Torne o arquivo de ",(0,n.kt)("em",{parentName:"p"},"completion")," execut\xe1vel:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chmod +x path/to/task.bash\n")),(0,n.kt)("p",null,"Depois, adicione isto ao seu ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"source path/to/task.bash\n")),(0,n.kt)("h3",{id:"zsh"},"ZSH"),(0,n.kt)("p",null,"Coloque o arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"_task")," em algum lugar no seu ",(0,n.kt)("inlineCode",{parentName:"p"},"$FPATH"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mv path/to/_task /usr/local/share/zsh/site-functions/_task\n")),(0,n.kt)("p",null,"Certifique-se de que o seguinte esteja presente em seu ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"autoload -U compinit\ncompinit -i\n")),(0,n.kt)("p",null,"Recomenda-se ZSH vers\xe3o 5.7 ou posterior."),(0,n.kt)("h3",{id:"fish"},"Fish"),(0,n.kt)("p",null,"Mova o script de ",(0,n.kt)("em",{parentName:"p"},"completion")," ",(0,n.kt)("inlineCode",{parentName:"p"},"task.fish"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mv path/to/task.fish ~/.config/fish/completions/task.fish\n")),(0,n.kt)("h3",{id:"powershell"},"PowerShell"),(0,n.kt)("p",null,"Abra seu ",(0,n.kt)("em",{parentName:"p"},"profile script")," rodando:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mkdir -Path (Split-Path -Parent $profile) -ErrorAction SilentlyContinue\nnotepad $profile\n")),(0,n.kt)("p",null,"Adicione a seguinte linha e salve o arquivo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Invoke-Expression -Command path/to/task.ps1\n")))}d.isMDXComponent=!0}}]);