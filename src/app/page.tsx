import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex">
        <div>
          <div>imagem</div>
          <div>
            <div className="search_bar">
              <img src="" alt="search_icon"></img>
              <input type="search" />
              <select name="" id="">
                <option value="">Nintendo</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="support" />
              suporte
            </div>
            <div>
              <img src="" alt="wish_list" />
              Lista de desejos
            </div>
            <div>
              <img src="" alt="user_icon" />
              Iniciar sessão / Criar uma conta
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="Jogos" />
            <p>Jogos</p>
            <p>{'>'}</p>
          </div>
          <div>
            <img src="" alt="Jogos" />
            <p>Nintendo Switch</p>
            <p>{'>'}</p>
          </div>
          <div>
            <img src="" alt="Jogos" />
            <p>Novidades</p>
            <p>{'>'}</p>
          </div>
        </div>
      </header>
    </main>
  )
}
