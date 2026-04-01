import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


//usar rfce para fazer tudo isso
function Footer() {

  let data = new Date().getFullYear()
  return (
    <>
    <div className="flex justify-center bg-purple-950 text-white">
      <div className=" container flex flex-col items-center py-4">
        <p className="text-xl font-bold">
          Blog Pessoal da Lary | Copyright: {data}
        </p>
        <p className="text-lg"> Acesse Minhas redes sociais</p>
        <div className="flex gap-2">
          < LinkedinLogoIcon size={48}/>
          < GithubLogoIcon size={48}/>
          < InstagramLogoIcon size={48}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer