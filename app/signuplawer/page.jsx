"use client"
import React from 'react'
import "./styles.css"
import { useState } from 'react'
import "./styles.css"

const Signuplawyer = () => {


  // states to manage input value
const [username, setusername] = useState("");
const [userPrenom, setUserPrenom] = useState("");
const [email, setEmail] = useState("");
const [dateDeNaissance, setdateDeNaissance] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

// states to mange erros
const [errorUserName, setErrorUserName] = useState("");
const [errorUserPrenom, setErrorUserPrenom] = useState("");
const [errordateDeNaissance, setErrorDateDeNaissance] = useState("");
const [errorEmail, setErrorEmail] = useState("");
const [errorPassword, setErrorPassword] = useState("");
const [errorConfrimPassword, setErrorConfirmPassword] = useState("");

// states to change colors after validation
const [userColor, setUserColor] = useState("");
const [userPrenomColor, setUserPrenomColor] = useState("");
const [emailColor, setEmailColor] = useState("");
const [dateDeNaissanceColor, setDateDeNaissanceColor] = useState("");
const [passwordColor, setPasswordColor] = useState("");
const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

function validate(e) {
  e.preventDefault();

  if (username.length > 8) {
    setErrorUserName("");
    setUserColor("green");
  } else {
    setErrorUserName("Username must be 8 letters long.");
    setUserColor("red");
  }
  if (userPrenom.length > 8) {
    setErrorUserPrenom("");
    setUserPrenomColor("green");
  } else {
    setErrorUserPrenom("Username must be 8 letters long.");
    setUserPrenomColor("red");
  }

  if (email.includes("@gmail")) {
    setErrorEmail("");
    setEmailColor("green");
  } else {
    setEmailColor("red");
    setErrorEmail("Email should have @gmail");
  }
  let regex = /^\d{2}\/\d{2}\/\d{4}$/

if(regex.test(dateDeNaissance)) {
setErrorDateDeNaissance("");
setDateDeNaissanceColor("green")
}else {
setErrorDateDeNaissance("Date De N'aissance doit respecter les format jour/mois/année");
  setDateDeNaissanceColor("red")
}

  if (password.length > 8) {
    setErrorPassword("");
    setPasswordColor("green");
  } else {
    setErrorPassword("Password should be 8 letters long ");
    setPasswordColor("red");
  }

  if (password != "" && password == confirmPassword) {
    setErrorConfirmPassword("");
    setConfirmPasswordColor("green");
  } else {
    setErrorConfirmPassword("Passwords didn't matched.");
    setConfirmPasswordColor("red");
  }
}

  return (
<form className=' p-30 lg:p-[300px] bg-gradient-to-br from-[#222221] to-[#C74501]'>
  <div className="space-y-7">


    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-white">Veulliez remplir ce formulaire s&apos;il vous plais</h2>
      <p className="mt-1 text-sm leading-6 text-orange-600">Votre Information Reste Confidentielle</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label for="first-name" className="block text-sm font-medium leading-6 text-white">Nom</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
            value={username}
            style={{ borderColor: userColor }}
            onChange={(e) => setusername(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
          <p className="error">{errorUserName}</p>
        </div>

        <div className="sm:col-span-3">
          <label for="last-name" className="block text-sm font-medium leading-6 text-white">Prenom</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
style={{borderColor:userPrenomColor}}
value={userPrenom}
onChange={(e) => setUserPrenom(e.target.value)}
            className="block w-full rounded-md  py-1.5 text-black     placeholder:text-black   sm:text-sm sm:leading-6"/>
          </div>
          <p className="error">{errorUserPrenom}</p>
        </div>

        <div className="sm:col-span-4">
          <label for="email" className="block text-sm font-medium leading-6 text-white">Adresse Email</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autocomplete="email"
            value={email}
            style={{ borderColor: emailColor }}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
          <p className="error">{errorEmail}</p>
        </div>
        <div className="sm:col-span-4">
          <label for="email" className="block text-sm font-medium leading-6 text-white">Mot De Passe</label>
          <div className="mt-2">
            <input id="email" name="email" type="password" autocomplete="email"
            value={password}
            style={{ borderColor: passwordColor }}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
          <p className="error">{errorPassword}</p>
        </div>
        <div className="sm:col-span-4">
          <label for="email" className="block text-sm font-medium leading-6 text-white">Confirmer Votre Mot De Passe</label>
          <div className="mt-2">
            <input id="email" name="email" type="password" autocomplete="email"
value={confirmPassword}
style={{ borderColor: confirmPasswordColor }}
onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
          <p className="error">{errorConfrimPassword}</p>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label for="city" className="block text-sm font-medium leading-6 text-white">Age</label>
          <div className="mt-2">
            <input type="text" name="city" id="city" autocomplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label for="country" className="block text-sm font-medium leading-6 text-white">Wilaya</label>
          <div className="mt-2">
            <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>01 Adrar</option>
              <option>02 Chlef</option>
              <option>03 Laghouat</option>
              <option>04 Oum El Bouaghi</option>
              <option>05 Batna</option>
              <option>06 Béjaïa</option>
              <option>07 Biskra</option>
              <option>08 Béchar </option>
              <option>09 Blida</option>
              <option>10 Bouira</option>
              <option>11 Tamanrasset</option>
              <option>12 Tébessa</option>
              <option>13 Tlemcen</option>
              <option>14 Tiaret</option>
              <option>15 Tizi Ouzou</option>
              <option>16 Alger</option>
              <option>17 Djelfa</option>
              <option>18 Jijel</option>
              <option>19 Sétif</option>
              <option>20 Saïda</option>
              <option>21 Skikda</option>
              <option>22 Sidi Bel Abbès
              </option>
              <option>23 Annaba</option>
              <option>24 Guelma</option>
              <option>25 Constantine</option>
              <option>26 Médéa</option>
              <option>27 Mostaganem	</option>
              <option>28 M&apos;Sila</option>
              <option>29 Mascara</option>
              <option>30 Ouargla </option>
              <option>31 Oran</option>
              <option>32 El Bayadh</option>
              <option>33 Illizi</option>
              <option>34 Bordj Bou Arreridj</option>
              <option>35 Boumerdès</option>
              <option>36 El Tarf</option>
              <option>37 Tindouf</option>
              <option>38 Tissemsilt</option>
              <option>39 El Oued</option>
              <option>40 Khenchela</option>
              <option>41 Souk Ahras</option>
              <option>42 Tipaza</option>
              <option>43 Mila</option>
              <option>44 Aïn Defla</option>
              <option>45 Naâma</option>
              <option>46 Aïn Témouchent	</option>
              <option>47 Ghardaïa </option>
              <option>48 Relizane</option>
              <option>49 Timimoun</option>
              <option>50 Bordj Badji Mokhtar</option>
              <option>51 Ouled Djellal </option>
              <option>52 Béni Abbès</option>
              <option>53 In Salah </option>
              <option>54 In Guezzam </option>
              <option>55 Touggourt</option>
              <option>56 Djanet</option>
              <option>57 El M&apos;Ghair</option>
              <option>58 El Meniaa </option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label for="street-address" className="block text-sm font-medium leading-6 text-white">Date De N&apos;aissance</label>
          <div className="mt-2">
            <input type="text" name="street-address" id="street-address" autocomplete="street-address"
style={{ borderColor: dateDeNaissanceColor }}
value={dateDeNaissance}
            onChange={(e) => setdateDeNaissance(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
          <p className="error">{errordateDeNaissance}</p>
        </div>



        {/* <div className="sm:col-span-2">
          <label for="region" className="block text-sm font-medium leading-6 text-white">State / Province</label>
          <div className="mt-2">
            <input type="text" name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label for="postal-code" className="block text-sm font-medium leading-6 text-white">ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"/>
          </div>
        </div> */}
      </div>
    </div>


  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-white">Cancel</button>
    <button type="submit" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={validate}>Sign Up</button>
  </div>
</form>


  )
}

export default Signuplawyer