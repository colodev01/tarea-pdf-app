package com.franco.tareapdf.controllers;

import com.franco.tareapdf.dto.DocumentoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/civisign/serviciofirma")
public class DocumentoController {

    @Autowired
    private com.alkemy.icons.icons.services.DocumentoService documentoService;

    @PostMapping
    public ResponseEntity<String> crearDocumento(@RequestBody DocumentoDTO documentoDTO) {
        DocumentoDTO documentoGuardado = documentoService.save(documentoDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(documentoGuardado);
    }
}