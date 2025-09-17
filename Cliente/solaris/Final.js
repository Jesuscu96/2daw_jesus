function checkCashRegister(price, cash, cid) {
  const totalCID = Number((cid.reduce((acc, [e0, e1]) => acc + e1, 0)).toFixed(2));
  const tipo_moneda =[["ONE HUNDRED",100],["TWENTY",20],["TEN",10],["FIVE",5],["ONE",1],["QUARTER",0.25],["DIME",0.1],["NICKEL",0.05],["PENNY",0.01]];
  const newcid = cid.map((elem, indi, list) => list[list.length - 1 - indi]);
  let change_deber = cash - price;

  function hayCambio(dineroCaja, cambio, total, moneda) {
    const paso1 = moneda.find(([mon, val]) => val <= cambio)// delvuelve la primera moneda que daria cambio 
    const paso2 = dineroCaja.findIndex(mon => mon[0] === paso1[0]); //busco en indice
    const paso3 = dineroCaja.slice(paso2) //devuelve el de dinero en caja la primera moneda que daria cambio 
    const paso4 = Number((paso3.reduce((acc, [e0, e1]) => acc + e1, 0)).toFixed(2))
    // la totalidad del dinero que habria en la caja permita dar cambio
    return  paso4
  };
  const estado = hayCambio(newcid, change_deber, totalCID, tipo_moneda);
  
  

  function cambio(change,  cidCopy = newcid) {
    let nuevo_change = parseFloat(change.toFixed(2));
    const filtroTipoMoneda = tipo_moneda.reduce((acc, [moneda, valor]) => {
      if (valor >= nuevo_change) {
        return [...acc, [moneda, 0]];  
      }
      if (valor <= nuevo_change) {
        const filtroPorCaja = (acum, [nomMoneda, cantidad]) => {
          if (moneda === nomMoneda && cantidad >= valor && valor <= nuevo_change) {
            const nuevoRestaCaja = cantidad - valor; 
            const restaCaja = parseFloat(nuevoRestaCaja.toFixed(2));
            const nuevoChangeResta = nuevo_change - valor;
            nuevo_change = parseFloat(nuevoChangeResta.toFixed(2));
            // Repetir la evaluación para la misma moneda con la nueva copia
            if (moneda === nomMoneda && restaCaja > 0 && valor <= nuevo_change) {
              return filtroPorCaja([...acum, [moneda, valor, nuevo_change]], [nomMoneda, restaCaja]);
            }
            return [...acum, [moneda, valor, nuevo_change]];
          }
          return acum;
        };
        const descontarCaja = cidCopy.reduce((acum, elem) => {
          return filtroPorCaja(acum, elem);
        }, []);
        return [...acc, ...descontarCaja];
      } 
      return acc;
    }, []);
    if (nuevo_change > 0) {
      return {status: "INSUFFICIENT FUNDS", change: []}
    } else {
      return filtroTipoMoneda;
    }
  }
  
  const cambioRedundante = cambio(change_deber)
  if (Array.isArray(cambioRedundante)) {
    /*function dineroCaja(change, cid) {
      const restarCid = cid
      let nuevo_change = parseFloat(change.toFixed(2));
      const filtroTipoMonedas = tipo_moneda.reduce((acc, [moneda, valor]) => {
        if (valor <= nuevo_change) {
          const caja = cid.reduce((acum, [nomMoneda, cantidad]) => {
            if (moneda === nomMoneda && cantidad >= valor && valor <= nuevo_change) {
              const nuevoChangeResta = nuevo_change - valor;
              nuevo_change = parseFloat(nuevoChangeResta.toFixed(2));
              return [...acum, [moneda, cantidad]]
            }
            return acum;
          }, []);
          return [...acc, ...caja]
        };
        return acc;
      }, []);
      return filtroTipoMonedas
    }
    const cajaDinero = dineroCaja(change_deber, newcid)*/
    const cambioSimRedundancia = (cambio, caja, change_deber ) => {
      const comparar = caja.reduce((acc, [moneda, valor]) => {
        const filtro = cambio.reduce((acum, [nomMoneda, nomValor, cam]) => {
          
          if (moneda === nomMoneda ) {
            const sumoValor = (acum + nomValor); 
            const nuevoValor = parseFloat(sumoValor.toFixed(2));
            acum = nuevoValor
            return acum
          } 
          return acum
          
        }, 0);
        return [...acc, [moneda, filtro]]
      }, []);
      return comparar
    };
  
    cambioSimRedundancia(cambioRedundante, newcid, change_deber)
    const cambioLimpio = cambioSimRedundancia(cambioRedundante, newcid, change_deber)
    const cambioDevuelto = cambioLimpio.filter(([mon, cant]) => change_deber >= cant && cant > 0)
    
  
    let devuelto
    if (estado > change_deber) {
      devuelto = {status: "OPEN", change: cambioDevuelto}
      console.log(devuelto)
      return devuelto
    } if (totalCID === change_deber) {
      devuelto = {status: "CLOSED", change: cambioLimpio.reverse()}
      console.log(devuelto)
      return devuelto
    } if (estado < change_deber) {
      devuelto = {status: "INSUFFICIENT FUNDS", change: []}
      console.log(devuelto)
      return devuelto
    }
  } else if (typeof cambioRedundante === "object") {
    console.log(cambioRedundante)
    return cambioRedundante
  } 
  
  
  
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])